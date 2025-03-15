import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, Button, Spin, message, Tooltip, Dropdown, Menu, Input, Modal, Space, Divider } from 'antd';
import { 
  SaveOutlined, 
  DownloadOutlined, 
  UploadOutlined, 
  PlusOutlined,
  DeleteOutlined,
  UndoOutlined,
  RedoOutlined,
  SearchOutlined,
  CopyOutlined,
  ScissorOutlined,
  SnippetsOutlined,
  FormatPainterOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  ColumnHeightOutlined,
  ColumnWidthOutlined,
  BorderOutlined,
  NumberOutlined,
  PercentageOutlined,
  DollarOutlined,
  FontColorsOutlined,
  BgColorsOutlined,
  FilterOutlined
} from '@ant-design/icons';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './styles.css'; // 我们需要创建这个文件

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const API_URL = 'http://localhost:3000/api';

interface Cell {
  value: string | number;
  row: number;
  col: number;
}

interface Sheet {
  id: string;
  name: string;
  data: Cell[];
}

const SpreadsheetView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [sheet, setSheet] = useState<Sheet | null>(null);
  const [rowData, setRowData] = useState<any[]>([]);
  const [columnDefs, setColumnDefs] = useState<any[]>([]);
  const [selectedCells, setSelectedCells] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [undoStack, setUndoStack] = useState<any[]>([]);
  const [redoStack, setRedoStack] = useState<any[]>([]);
  const [statusText, setStatusText] = useState('就绪');
  const gridRef = useRef<any>(null);

  // 获取电子表格数据
  const fetchSheet = async () => {
    if (!id) {
      console.log('没有提供ID，创建新的电子表格');
      return;
    }

    setLoading(true);
    try {
      // 确保ID是数字
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        throw new Error(`无效的ID格式: ${id}`);
      }

      const response = await axios.get(`${API_URL}/sheets/${numericId}`);
      const sheetData = response.data;
      console.log('从服务器获取的表格数据:', sheetData);
      
      // 更新状态
      setSheet(sheetData);
      
      // 处理数据格式，转换为AG Grid可用的格式
      const { rowData, columnDefs } = processSheetData(sheetData);
      setRowData(rowData);
      setColumnDefs(columnDefs);
    } catch (error) {
      console.error('加载电子表格失败:', error);
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        message.error('找不到电子表格');
        navigate('/sheets');
      } else {
        message.error('加载失败，请重试');
      }
    } finally {
      setLoading(false);
    }
  };

  // 加载电子表格数据
  useEffect(() => {
    if (id) {
      fetchSheet();
    }
  }, [id, navigate]);

  // 添加全局键盘事件监听
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 只处理表格获得焦点时的快捷键
      if (!gridRef.current || !document.activeElement?.closest('.ag-theme-alpine')) {
        return;
      }
      
      if (e.ctrlKey) {
        switch (e.key) {
          case 'z':
            e.preventDefault();
            undo();
            break;
          case 'y':
            e.preventDefault();
            redo();
            break;
          case 'c':
            // 复制由浏览器原生处理，但我们也调用自己的方法
            copySelectedCells();
            break;
          case 'v':
            // 粘贴由浏览器原生处理，但我们也调用自己的方法
            setTimeout(() => pasteToSelectedCell(), 0);
            break;
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [rowData, columnDefs]); // 依赖项包含可能在快捷键处理中使用的状态

  // 添加行号列
  const addRowNumberColumn = () => {
    return {
      headerName: '#',
      field: 'rowNum',
      valueGetter: (params: any) => {
        return params.node.rowIndex + 1;
      },
      width: 40,
      minWidth: 40,
      maxWidth: 40,
      pinned: 'left',
      lockPosition: true,
      lockVisible: true,
      suppressNavigable: true,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      filter: false,
      editable: false,
      cellClass: 'row-number-cell',
      headerClass: 'row-number-header',
      cellStyle: {
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };
  };

  // 处理表格数据
  const processSheetData = (sheet: Sheet | null): { rowData: any[]; columnDefs: any[] } => {
    const columnDefs: any[] = [addRowNumberColumn()];
    const rowData: any[] = [];

    console.log('正在处理表格数据:', sheet);

    // 如果没有有效的表格数据，创建一个空表格
    if (!sheet || !sheet.data || sheet.data.length === 0) {
      // 创建默认的26列 (A-Z)
      for (let col = 0; col < 26; col++) {
        columnDefs.push({
          headerName: String.fromCharCode(65 + col),
          field: `col_${col}`,
          editable: true,
          resizable: true
        });
      }

      // 创建默认的100行
      for (let row = 0; row < 100; row++) {
        const rowObj: Record<string, any> = { id: `row_${row}` };
        for (let col = 0; col < 26; col++) {
          rowObj[`col_${col}`] = '';
        }
        rowData.push(rowObj);
      }

      return { rowData, columnDefs };
    }

    // 如果有数据，计算最大行数和列数
    let maxRow = -1;
    let maxCol = -1;
    
    console.log('原始单元格数据:', sheet.data);

    sheet.data.forEach((cell) => {
      maxRow = Math.max(maxRow, cell.row);
      maxCol = Math.max(maxCol, cell.col);
    });

    console.log(`计算得到最大行数: ${maxRow}, 最大列数: ${maxCol}`);

    // 确保至少有一些行列（如果数据为空）
    maxCol = Math.max(maxCol, 25); // 至少26列 (0-25)
    maxRow = Math.max(maxRow, 99); // 至少100行 (0-99)

    // 创建列定义
    for (let col = 0; col <= maxCol; col++) {
      columnDefs.push({
        headerName: String.fromCharCode(65 + col),
        field: `col_${col}`,
        editable: true,
        resizable: true
      });
    }

    // 创建行数据
    for (let row = 0; row <= maxRow; row++) {
      const rowObj: Record<string, any> = { id: `row_${row}` };
      // 初始化所有单元格为空字符串
      for (let col = 0; col <= maxCol; col++) {
        rowObj[`col_${col}`] = '';
      }
      rowData.push(rowObj);
    }

    // 填充实际数据
    sheet.data.forEach((cell) => {
      // 确保行和列索引在有效范围内
      if (cell.row >= 0 && cell.row <= maxRow && cell.col >= 0 && cell.col <= maxCol) {
        if (rowData[cell.row]) {
          rowData[cell.row][`col_${cell.col}`] = cell.value !== undefined ? cell.value : '';
        } else {
          console.warn(`无法找到行索引 ${cell.row} 的行数据`);
        }
      } else {
        console.warn(`单元格索引超出范围: row=${cell.row}, col=${cell.col}`);
      }
    });

    console.log('处理后的行数据:', rowData);

    return { rowData, columnDefs };
  };

  // 添加新行
  const addNewRow = () => {
    if (gridRef.current) {
      // 保存当前状态到撤销栈
      saveUndoState();
      
      const api = gridRef.current.api;
      const currentRowData = [...rowData];
      
      // 创建新行对象
      const newRow: Record<string, any> = { id: `row_${currentRowData.length}` };
      const colCount = columnDefs.length - 1; // 减去行号列
      
      // 初始化所有列为空字符串
      for (let i = 0; i < colCount; i++) {
        newRow[`col_${i}`] = '';
      }
      
      console.log('添加新行:', newRow);
      console.log('当前表格数据行数:', currentRowData.length);
      
      // 添加到表格数据
      const updatedRowData = [...currentRowData, newRow];
      setRowData(updatedRowData);
      
      // 滚动到新行位置并立即开始编辑第一个单元格
      setTimeout(() => {
        api.ensureIndexVisible(currentRowData.length, 'bottom');
        api.refreshCells({ force: true });
        
        // 可选：聚焦到新行的第一个可编辑单元格
        if (columnDefs.length > 1) {
          const firstEditableColId = columnDefs[1].field; // 第二列（跳过行号列）
          api.startEditingCell({
            rowIndex: currentRowData.length,
            colKey: firstEditableColId
          });
        }
      }, 100);
      
      message.success('已添加新行');
      setStatusText(`已添加第 ${currentRowData.length + 1} 行`);
    }
  };

  // 删除选中行
  const deleteSelectedRows = () => {
    if (!gridRef.current) return;
    
    // 保存当前状态到撤销栈
    saveUndoState();
    
    const api = gridRef.current.api;
    const selectedNodes = api.getSelectedNodes();
    
    if (selectedNodes.length === 0) {
      message.info('请先选择要删除的行');
      return;
    }
    
    // 获取选中行的索引
    const selectedIndices = selectedNodes.map(node => node.rowIndex);
    
    // 过滤掉选中的行
    const newRowData = rowData.filter((_, index) => !selectedIndices.includes(index));
    
    // 更新行ID
    const updatedRowData = newRowData.map((row, index) => ({
      ...row,
      id: `row_${index}`
    }));
    
    setRowData(updatedRowData);
    message.success(`已删除 ${selectedNodes.length} 行`);
    setStatusText(`已删除 ${selectedNodes.length} 行`);
  };

  // 保存当前状态到撤销栈
  const saveUndoState = () => {
    setUndoStack([...undoStack, [...rowData]]);
    // 清空重做栈
    setRedoStack([]);
  };

  // 撤销操作
  const undo = () => {
    if (undoStack.length === 0) {
      message.info('没有可撤销的操作');
      return;
    }
    
    // 保存当前状态到重做栈
    setRedoStack([...redoStack, [...rowData]]);
    
    // 恢复上一个状态
    const previousState = undoStack[undoStack.length - 1];
    setRowData(previousState);
    
    // 从撤销栈中移除已恢复的状态
    setUndoStack(undoStack.slice(0, -1));
    
    message.success('已撤销上一步操作');
    setStatusText('已撤销');
  };

  // 重做操作
  const redo = () => {
    if (redoStack.length === 0) {
      message.info('没有可重做的操作');
      return;
    }
    
    // 保存当前状态到撤销栈
    setUndoStack([...undoStack, [...rowData]]);
    
    // 恢复下一个状态
    const nextState = redoStack[redoStack.length - 1];
    setRowData(nextState);
    
    // 从重做栈中移除已恢复的状态
    setRedoStack(redoStack.slice(0, -1));
    
    message.success('已重做操作');
    setStatusText('已重做');
  };

  // 搜索单元格
  const searchCells = (value: string) => {
    if (!value.trim() || !gridRef.current) {
      return;
    }
    
    const api = gridRef.current.api;
    const searchText = value.toLowerCase();
    const foundCells: any[] = [];
    
    // 遍历所有行和单元格
    api.forEachNode((node: any) => {
      if (!node.data) return;
      
      Object.entries(node.data).forEach(([key, cellValue]) => {
        if (key !== 'id' && key !== 'rowNum' && cellValue !== undefined && cellValue !== null) {
          const valueStr = String(cellValue).toLowerCase();
          if (valueStr.includes(searchText)) {
            foundCells.push({
              rowIndex: node.rowIndex,
              colId: key
            });
          }
        }
      });
    });
    
    if (foundCells.length > 0) {
      // 高亮第一个找到的单元格
      api.ensureIndexVisible(foundCells[0].rowIndex);
      api.setFocusedCell(foundCells[0].rowIndex, foundCells[0].colId);
      
      message.success(`找到 ${foundCells.length} 个匹配项`);
      setStatusText(`找到 ${foundCells.length} 个匹配项`);
    } else {
      message.info('未找到匹配项');
      setStatusText('未找到匹配项');
    }
  };

  // 复制选中单元格
  const copySelectedCells = () => {
    if (!gridRef.current) return;
    
    const api = gridRef.current.api;
    const ranges = api.getCellRanges();
    
    if (!ranges || ranges.length === 0) {
      message.info('请先选择要复制的单元格');
      return;
    }
    
    // 获取选中范围
    const range = ranges[0];
    const startRow = range.startRow.rowIndex;
    const endRow = range.endRow.rowIndex;
    const columns = range.columns;
    
    // 构建复制数据
    let copyData = '';
    for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
      const rowNode = api.getDisplayedRowAtIndex(rowIndex);
      if (!rowNode) continue;
      
      const rowValues = columns.map((col: any) => {
        const value = rowNode.data[col.colId];
        return value !== undefined && value !== null ? value : '';
      });
      
      copyData += rowValues.join('\t') + '\n';
    }
    
    // 复制到剪贴板
    navigator.clipboard.writeText(copyData)
      .then(() => {
        message.success('已复制到剪贴板');
        setStatusText('已复制');
      })
      .catch(err => {
        console.error('复制失败:', err);
        message.error('复制失败');
      });
  };

  // 粘贴到选中单元格
  const pasteToSelectedCell = async () => {
    if (!gridRef.current) return;
    
    try {
      // 保存当前状态到撤销栈
      saveUndoState();
      
      const api = gridRef.current.api;
      const focusedCell = api.getFocusedCell();
      
      if (!focusedCell) {
        message.info('请先选择要粘贴的位置');
        return;
      }
      
      // 从剪贴板获取文本
      const text = await navigator.clipboard.readText();
      if (!text) {
        message.info('剪贴板为空');
        return;
      }
      
      // 解析粘贴的数据（按制表符和换行符分割）
      const rows = text.split('\n').filter(row => row.trim());
      const startRowIndex = focusedCell.rowIndex;
      const startColId = focusedCell.column.colId;
      
      // 如果不是以col_开头的列ID，则不处理
      if (!startColId.startsWith('col_')) {
        message.info('不能粘贴到此位置');
        return;
      }
      
      const startColIndex = parseInt(startColId.replace('col_', ''), 10);
      
      // 更新数据
      const newRowData = [...rowData];
      rows.forEach((rowStr, rowOffset) => {
        const rowIndex = startRowIndex + rowOffset;
        
        // 如果行不存在，则添加新行
        if (rowIndex >= newRowData.length) {
          const newRow: Record<string, any> = { id: `row_${rowIndex}` };
          for (let i = 0; i < columnDefs.length - 1; i++) {
            newRow[`col_${i}`] = '';
          }
          newRowData.push(newRow);
        }
        
        // 分割行数据并填充单元格
        const cells = rowStr.split('\t');
        cells.forEach((cellValue, colOffset) => {
          const colIndex = startColIndex + colOffset;
          const colId = `col_${colIndex}`;
          
          // 确保列存在
          if (colIndex < columnDefs.length - 1) {
            newRowData[rowIndex][colId] = cellValue;
          }
        });
      });
      
      setRowData(newRowData);
      api.refreshCells({ force: true });
      
      message.success('粘贴成功');
      setStatusText('已粘贴');
    } catch (error) {
      console.error('粘贴失败:', error);
      message.error('粘贴失败');
    }
  };

  // 保存电子表格
  const saveSheet = async () => {
    if (!gridRef.current || !id) return;

    try {
      // 获取AG Grid中的所有数据
      const gridApi = gridRef.current.api;
      const allData: any[] = [];
      gridApi.forEachNode((node: any) => {
        if (node.data) {
          allData.push(node.data);
        }
      });

      console.log('准备保存的表格数据:', allData);
      console.log('表格行数:', allData.length);

      // 转换为后端需要的Cell格式
      const cells: Cell[] = [];
      allData.forEach((rowData, rowIndex) => {
        // 跳过id字段和行号字段
        Object.entries(rowData).forEach(([key, value]) => {
          if (key !== 'id' && key !== 'rowNum' && value !== undefined && value !== '') {
            // 从字段名称中提取列索引，例如 'col_0' -> 0
            if (key.startsWith('col_')) {
              const colIndex = parseInt(key.split('_')[1], 10);
              if (!isNaN(colIndex)) {
                cells.push({
                  row: rowIndex,
                  col: colIndex,
                  value: value as string | number
                });
              }
            }
          }
        });
      });

      console.log('转换后的单元格数据:', cells);

      // 发送到后端
      const payload = {
        name: sheet?.name || '未命名电子表格',
        data: cells
      };
      
      // 确保ID是数字
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        throw new Error(`无效的ID格式: ${id}`);
      }
      
      const response = await axios.put(`${API_URL}/sheets/${numericId}`, payload);
      console.log('服务器响应:', response.data);

      message.success('保存成功');
    } catch (error) {
      console.error('保存失败详情:', error);
      if (axios.isAxiosError(error) && error.response) {
        console.error('服务器返回错误:', error.response.data);
        message.error(`保存失败: ${error.response.data.message || '服务器错误'}`);
      } else {
        message.error('保存失败');
      }
    }
  };

  // 导出为Excel文件
  const exportToExcel = () => {
    if (!gridRef.current || !sheet) return;

    try {
      const gridApi = gridRef.current.api;
      const worksheetData: any[] = [];
      
      // 收集所有单元格数据
      gridApi.forEachNode((node: any) => {
        if (node.data) {
          const rowData = { ...node.data };
          delete rowData.id; // 移除id字段
          worksheetData.push(rowData);
        }
      });

      // 创建工作簿和工作表
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(worksheetData);
      XLSX.utils.book_append_sheet(wb, ws, sheet.name || 'Sheet1');
      
      // 导出Excel文件
      XLSX.writeFile(wb, `${sheet.name || 'spreadsheet'}.xlsx`);
      
      message.success('导出成功');
    } catch (error) {
      console.error('导出失败:', error);
      message.error('导出失败');
    }
  };

  // 导入Excel文件
  const importFromExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        // 获取第一个工作表
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // 转换为JSON格式
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        // 处理为AG Grid可用的格式
        const jsonArray = jsonData as unknown[][];
        if (jsonArray.length > 0) {
          // 确定列数
          let maxCols = 0;
          jsonArray.forEach(row => {
            if (Array.isArray(row) && row.length > maxCols) {
              maxCols = row.length;
            }
          });
          maxCols = Math.max(maxCols, 26); // 最少26列
          
          // 创建列定义
          const columns = Array.from({ length: maxCols }, (_, i) => ({
            headerName: String.fromCharCode(65 + i), // A-Z
            field: `col_${i}`,
            editable: true,
            width: 100
          }));

          // 创建行数据
          const rows = jsonArray.map((row: unknown[], rowIndex: number) => {
            const rowData: any = { id: rowIndex };
            
            // 初始化所有单元格为空
            for (let colIndex = 0; colIndex < maxCols; colIndex++) {
              rowData[`col_${colIndex}`] = '';
            }
            
            // 填充数据
            if (Array.isArray(row)) {
              row.forEach((cellValue, colIndex) => {
                if (colIndex < maxCols && cellValue !== null && cellValue !== undefined) {
                  rowData[`col_${colIndex}`] = cellValue;
                }
              });
            }
            
            return rowData;
          });

          setColumnDefs(columns);
          setRowData(rows);
          
          message.success('导入成功');
        } else {
          message.error('Excel文件格式不正确或为空');
        }
      } catch (error) {
        console.error('导入失败:', error);
        message.error('导入Excel文件失败');
      }
    };

    reader.readAsArrayBuffer(file);
  };

  // 单元格值变化处理
  const handleCellValueChanged = (params: any) => {
    console.log('单元格数据已修改:', params);
    setStatusText(`已编辑单元格 ${params.column.colDef.headerName}${params.node.rowIndex + 1}`);
  };

  // 单元格选择变化处理
  const handleRangeSelectionChanged = (params: any) => {
    const ranges = params.api.getCellRanges();
    if (ranges && ranges.length > 0) {
      const range = ranges[0];
      const startRow = range.startRow.rowIndex + 1;
      const endRow = range.endRow.rowIndex + 1;
      const startCol = range.columns[0].getColDef().headerName;
      const endCol = range.columns[range.columns.length - 1].getColDef().headerName;
      
      if (startRow === endRow && startCol === endCol) {
        setStatusText(`选中单元格 ${startCol}${startRow}`);
      } else {
        setStatusText(`选中区域 ${startCol}${startRow}:${endCol}${endRow}`);
      }
    }
  };

  // 渲染电子表格组件
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 16px',
        background: '#f0f0f0',
        height: '48px',
        borderBottom: '1px solid #d9d9d9'
      }}>
        <div style={{ 
          color: '#333', 
          fontSize: '16px', 
          fontWeight: 'bold',
          marginRight: 'auto' 
        }}>
          {sheet?.name || '未命名电子表格'}
        </div>
        <div>
          <Search
            placeholder="搜索内容"
            onSearch={searchCells}
            style={{ width: 200, marginRight: 8 }}
            allowClear
          />
          <Button 
            type="primary" 
            icon={<SaveOutlined />} 
            onClick={saveSheet}
            style={{ marginRight: 8 }}
          >
            保存
          </Button>
        </div>
      </Header>
      
      {/* 工具栏 */}
      <div className="excel-toolbar">
        <Space>
          <Tooltip title="撤销 (Ctrl+Z)">
            <Button 
              icon={<UndoOutlined />} 
              onClick={undo}
              disabled={undoStack.length === 0}
            />
          </Tooltip>
          <Tooltip title="重做 (Ctrl+Y)">
            <Button 
              icon={<RedoOutlined />} 
              onClick={redo}
              disabled={redoStack.length === 0}
            />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="复制 (Ctrl+C)">
            <Button icon={<CopyOutlined />} onClick={copySelectedCells} />
          </Tooltip>
          <Tooltip title="粘贴 (Ctrl+V)">
            <Button icon={<SnippetsOutlined />} onClick={pasteToSelectedCell} />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="添加行">
            <Button icon={<PlusOutlined />} onClick={addNewRow} />
          </Tooltip>
          <Tooltip title="删除选中行">
            <Button icon={<DeleteOutlined />} onClick={deleteSelectedRows} />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="导出Excel">
            <Button icon={<DownloadOutlined />} onClick={exportToExcel} />
          </Tooltip>
          <Tooltip title="导入Excel">
            <Button 
              icon={<UploadOutlined />} 
              onClick={() => document.getElementById('file-upload')?.click()}
            />
          </Tooltip>
          <input
            id="file-upload"
            type="file"
            accept=".xlsx,.xls"
            style={{ display: 'none' }}
            onChange={importFromExcel}
          />
        </Space>
      </div>
      
      <Content style={{ padding: 0, overflow: 'hidden' }}>
        <div 
          className="ag-theme-alpine" 
          style={{ 
            height: 'calc(100vh - 96px)', 
            width: '100%'
          }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              editable: true,
              resizable: true,
              sortable: true,
              filter: true,
              flex: 1,
              minWidth: 80,
              cellStyle: { padding: 0 }
            }}
            rowSelection="multiple"
            enableRangeSelection={true}
            suppressRowClickSelection={true}
            pagination={false}
            rowHeight={21}
            headerHeight={24}
            suppressMenuHide={true}
            rowStyle={{ 
              borderBottom: '1px solid #e0e0e0',
              margin: 0,
              padding: 0
            }}
            getRowId={(params) => params.data.id.toString()}
            getRowClass={() => 'excel-row'}
            enableCellChangeFlash={true}
            suppressDragLeaveHidesColumns={true}
            ensureDomOrder={true}
            suppressColumnVirtualisation={true}
            enableCellTextSelection={true}
            animateRows={true}
            rowBuffer={20}
            onCellValueChanged={handleCellValueChanged}
            onRangeSelectionChanged={handleRangeSelectionChanged}
            onCellClicked={(params: any) => {
              if (params.colDef.field !== 'rowNum') {
                const rowIndex = params.node.rowIndex !== null ? params.node.rowIndex + 1 : '';
                setStatusText(`单元格 ${params.column.getColDef().headerName}${rowIndex}`);
              }
            }}
            onCellDoubleClicked={(params: any) => {
              if (params.colDef.field !== 'rowNum') {
                params.api.startEditingCell({
                  rowIndex: params.node.rowIndex || 0,
                  colKey: params.column.getColId()
                });
              }
            }}
          />
        </div>
      </Content>
      
      {/* 状态栏 */}
      <Footer className="excel-statusbar">
        {statusText}
      </Footer>
    </Layout>
  );
};

export default SpreadsheetView; 
