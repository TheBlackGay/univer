import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, Button, Spin, message } from 'antd';
import { SaveOutlined, DownloadOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './styles.css'; // 我们需要创建这个文件

const { Header, Content } = Layout;
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

  // 添加行号列
  const addRowNumberColumn = () => {
    return {
      headerName: '#',
      field: 'rowNum',
      valueGetter: (params: any) => {
        return params.node.rowIndex + 1;
      },
      width: 50,
      minWidth: 50,
      maxWidth: 60,
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
      headerClass: 'row-number-header'
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
    if (rowData.length === 0) return;
    
    const newRowIndex = rowData.length;
    const newRow: any = { id: newRowIndex };
    
    // 初始化新行所有单元格为空
    columnDefs.forEach(col => {
      newRow[col.field] = '';
    });
    
    // 更新行数据
    setRowData([...rowData, newRow]);
    
    // 定位到新行
    setTimeout(() => {
      const gridApi = gridRef.current?.api;
      if (gridApi) {
        gridApi.ensureIndexVisible(newRowIndex);
      }
    }, 100);
    
    message.success('已添加新行');
  };

  // 添加一行
  const addRow = () => {
    if (gridRef.current) {
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
      setRowData([...currentRowData, newRow]);
      
      // 滚动到新行位置
      setTimeout(() => {
        api.ensureIndexVisible(currentRowData.length, 'bottom');
      }, 100);
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
      <Header style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        <div style={{ color: 'white', fontSize: '18px', marginRight: 'auto' }}>
          {sheet?.name || '未命名电子表格'}
        </div>
        <div>
          <Button 
            type="primary" 
            icon={<SaveOutlined />} 
            onClick={saveSheet}
            style={{ marginRight: 8 }}
          >
            保存
          </Button>
          <Button 
            icon={<DownloadOutlined />} 
            onClick={exportToExcel}
            style={{ marginRight: 8 }}
          >
            导出
          </Button>
          <Button 
            icon={<UploadOutlined />} 
            onClick={() => document.getElementById('file-upload')?.click()}
            style={{ marginRight: 8 }}
          >
            导入
          </Button>
          <Button 
            type="primary"
            icon={<PlusOutlined />}
            onClick={addNewRow}
          >
            添加行
          </Button>
          <input
            id="file-upload"
            type="file"
            accept=".xlsx,.xls"
            style={{ display: 'none' }}
            onChange={importFromExcel}
          />
        </div>
      </Header>
      <Content style={{ padding: 8, overflow: 'auto' }}>
        <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 80px)', width: '100%' }}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              editable: true,
              resizable: true,
              sortable: true,
              filter: true
            }}
            rowSelection="multiple"
            enableRangeSelection={true}
            suppressRowClickSelection={true}
            pagination={false}
            rowHeight={28}
            headerHeight={32}
            suppressMenuHide={true}
            // 显示行号
            rowStyle={{ borderLeft: '1px solid #dde2eb' }}
            getRowId={(params) => params.data.id.toString()}
            getRowClass={(params) => params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}
            suppressDragLeaveHidesColumns={true}
            // Excel风格设置
            ensureDomOrder={true}
            suppressColumnVirtualisation={true}
            enableCellTextSelection={true}
            animateRows={true}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default SpreadsheetView; 
