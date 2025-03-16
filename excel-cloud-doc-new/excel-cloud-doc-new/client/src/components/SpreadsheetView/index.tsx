import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, Button, Spin, message, Tooltip, Dropdown, Menu, Input, Modal, Space, Divider, Popover } from 'antd';
import type { MenuProps } from 'antd';
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
  FilterOutlined,
  AppstoreAddOutlined,
  EyeOutlined,
  LockOutlined
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

  // 冻结窗格函数
  const freezePane = (rowIndex: number = 0, colIndex: number = 0) => {
    if (!gridRef.current || !gridRef.current.api) return;
    
    // 获取当前焦点单元格
    const focusedCell = gridRef.current.api.getFocusedCell();
    if (!focusedCell && (rowIndex === 0 || colIndex === 0)) {
      message.info('请先选择要冻结的单元格');
      return;
    }
    
    // 使用传入的参数或聚焦的单元格
    const r = rowIndex > 0 ? rowIndex : (focusedCell ? focusedCell.rowIndex : 0);
    const c = colIndex > 0 ? colIndex : (focusedCell ? getColumnIndexById(focusedCell.column.colId) : 0);
    
    if (r <= 0 && c <= 0) {
      message.info('请选择有效的冻结位置');
      return;
    }
    
    const columnApi = gridRef.current.columnApi;
    const gridApi = gridRef.current.api;
    
    // 冻结行
    if (r > 0) {
      gridApi.setPinnedTopRowData(rowData.slice(0, r));
      setStatusText(`已冻结 ${r} 行`);
    } else {
      gridApi.setPinnedTopRowData(null);
    }
    
    // 冻结列
    if (c > 0) {
      // 获取列IDs
      const allColumns = columnApi.getAllColumns();
      const columnsToPin = allColumns.slice(0, c + 1); // +1是因为包括行号列
      const columnIds = columnsToPin.map((col: any) => col.colId);
      
      columnApi.setColumnsToPin(columnIds, 'left');
      setStatusText(`已冻结 ${r > 0 ? r + '行和' : ''} ${c} 列`);
    } else {
      columnApi.setColumnsToPin([], 'left');
    }
    
    message.success(`已冻结${r > 0 ? r + '行' : ''}${r > 0 && c > 0 ? '和' : ''}${c > 0 ? c + '列' : ''}`);
  };
  
  // 辅助函数：获取列索引
  const getColumnIndexById = (colId: string): number => {
    if (colId === 'rowNum') return 0;
    
    for (let i = 0; i < columnDefs.length; i++) {
      if (columnDefs[i].field === colId) {
        return i;
      }
    }
    return 0;
  };

  // 添加格式化功能
  const applyFormatting = (formatType: 'bold' | 'italic' | 'underline' | 'align' | 'color', value?: string) => {
    if (!gridRef.current) return;
    
    const api = gridRef.current.api;
    const ranges = api.getCellRanges();
    
    if (!ranges || ranges.length === 0) {
      message.info('请先选择要格式化的单元格');
      return;
    }
    
    // 保存当前状态到撤销栈
    saveUndoState();
    
    const range = ranges[0];
    const startRow = range.startRow.rowIndex;
    const endRow = range.endRow.rowIndex;
    const columns = range.columns;
    
    // 获取当前选中的单元格
    const cellsToUpdate: { rowIndex: number, colId: string }[] = [];
    for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
      columns.forEach((col: any) => {
        if (col.colId !== 'rowNum') {
          cellsToUpdate.push({ rowIndex, colId: col.colId });
        }
      });
    }
    
    // 应用格式
    if (cellsToUpdate.length > 0) {
      const cellClassRules = {
        'cell-bold': (params: any) => params.data.cellStyles?.[params.column.colId]?.bold === true,
        'cell-italic': (params: any) => params.data.cellStyles?.[params.column.colId]?.italic === true,
        'cell-underline': (params: any) => params.data.cellStyles?.[params.column.colId]?.underline === true,
        'cell-align-left': (params: any) => params.data.cellStyles?.[params.column.colId]?.align === 'left',
        'cell-align-center': (params: any) => params.data.cellStyles?.[params.column.colId]?.align === 'center',
        'cell-align-right': (params: any) => params.data.cellStyles?.[params.column.colId]?.align === 'right',
      };
      
      // 应用新的样式
      const updatedRowData = [...rowData];
      cellsToUpdate.forEach(({ rowIndex, colId }) => {
        if (!updatedRowData[rowIndex].cellStyles) {
          updatedRowData[rowIndex].cellStyles = {};
        }
        
        if (!updatedRowData[rowIndex].cellStyles[colId]) {
          updatedRowData[rowIndex].cellStyles[colId] = {};
        }
        
        const currentStyle = updatedRowData[rowIndex].cellStyles[colId];
        
        switch (formatType) {
          case 'bold':
            updatedRowData[rowIndex].cellStyles[colId].bold = !currentStyle.bold;
            break;
          case 'italic':
            updatedRowData[rowIndex].cellStyles[colId].italic = !currentStyle.italic;
            break;
          case 'underline':
            updatedRowData[rowIndex].cellStyles[colId].underline = !currentStyle.underline;
            break;
          case 'align':
            updatedRowData[rowIndex].cellStyles[colId].align = value;
            break;
          case 'color':
            updatedRowData[rowIndex].cellStyles[colId].color = value;
            break;
        }
      });
      
      setRowData(updatedRowData);
      api.refreshCells({ force: true });
      setStatusText(`已应用${formatType}格式`);
    }
  };

  // 加载电子表格数据
  useEffect(() => {
    if (id) {
      fetchSheet();
    }
  }, [id, navigate]);

  // 增强键盘事件监听
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 只处理表格获得焦点时的快捷键
      if (!gridRef.current || !document.activeElement?.closest('.ag-theme-alpine')) {
        return;
      }
      
      // 同时支持Windows的Ctrl键和Mac的Command键
      const isModifierKey = e.ctrlKey || e.metaKey;
      
      // F2 键开始编辑
      if (e.key === 'F2') {
        e.preventDefault();
        const focusedCell = gridRef.current.api.getFocusedCell();
        if (focusedCell && focusedCell.column.getColDef().editable) {
          gridRef.current.api.startEditingCell({
            rowIndex: focusedCell.rowIndex,
            colKey: focusedCell.column.colId
          });
        }
        return;
      }
      
      // 方向键导航（带Shift键可以扩展选择区域）
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        if (e.shiftKey) {
          // 扩展选择区域
          const api = gridRef.current.api;
          const focusedCell = api.getFocusedCell();
          const ranges = api.getCellRanges();
          
          if (focusedCell && ranges.length > 0) {
            let newRowIndex = focusedCell.rowIndex;
            let newColIndex = api.getColumnDefs().findIndex((col: any) => col.field === focusedCell.column.getColId());
            
            // 计算新位置
            if (e.key === 'ArrowUp') newRowIndex = Math.max(0, newRowIndex - 1);
            else if (e.key === 'ArrowDown') newRowIndex = Math.min(rowData.length - 1, newRowIndex + 1);
            else if (e.key === 'ArrowLeft') newColIndex = Math.max(0, newColIndex - 1);
            else if (e.key === 'ArrowRight') newColIndex = Math.min(api.getColumnDefs().length - 1, newColIndex + 1);
            
            // 更新选择范围
            const colId = (api.getColumnDefs()[newColIndex] as any).field;
            api.setFocusedCell(newRowIndex, colId);
            e.preventDefault();
          }
        }
      }
      
      // 直接输入开始编辑
      if (!isModifierKey && !e.altKey && e.key.length === 1 && /^[a-zA-Z0-9\s\-=+*\/.,;:'"`!@#$%^&*()_+[\]{}|\\<>?]$/.test(e.key)) {
        const focusedCell = gridRef.current.api.getFocusedCell();
        if (focusedCell && focusedCell.column.getColDef().editable) {
          if (!gridRef.current.api.getEditingCells().length) {
            gridRef.current.api.startEditingCell({
              rowIndex: focusedCell.rowIndex,
              colKey: focusedCell.column.colId,
              keyPress: e.key
            });
            e.preventDefault();
          }
        }
      }
      
      // 常规快捷键
      if (isModifierKey) {
        switch (e.key.toLowerCase()) {
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
          case 'b':
            e.preventDefault();
            // 加粗单元格文本
            applyFormatting('bold');
            break;
          case 'i':
            e.preventDefault();
            // 设置斜体
            applyFormatting('italic');
            break;
          case 'u':
            e.preventDefault();
            // 添加下划线
            applyFormatting('underline');
            break;
        }
      }
      
      // Delete键删除单元格内容
      if (e.key === 'Delete' || e.key === 'Backspace') {
        const api = gridRef.current.api;
        const ranges = api.getCellRanges();
        
        if (ranges && ranges.length > 0) {
          // 保存撤销状态
          saveUndoState();
          
          const range = ranges[0];
          const startRow = range.startRow.rowIndex;
          const endRow = range.endRow.rowIndex;
          const columns = range.columns;
          
          // 清空选中区域的单元格
          const newRowData = [...rowData];
          for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
            columns.forEach((col: any) => {
              if (newRowData[rowIndex] && col.colId !== 'rowNum') {
                newRowData[rowIndex][col.colId] = '';
              }
            });
          }
          
          setRowData(newRowData);
          api.refreshCells();
          e.preventDefault();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [rowData, columnDefs, undo, redo, copySelectedCells, pasteToSelectedCell, applyFormatting, saveUndoState]);

  // 添加右键菜单
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number, y: number } | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ rowIndex: number, colId: string } | null>(null);

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    const gridElement = document.querySelector('.ag-theme-alpine');
    if (!gridElement || !gridRef.current) return;
    
    const rect = gridElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const cell = (e.target as HTMLElement).closest('.ag-cell');
    if (cell) {
      const rowIndex = parseInt(cell.getAttribute('row-index') || '0', 10);
      const colId = cell.getAttribute('col-id') || '';
      
      setSelectedCell({ rowIndex, colId });
      setContextMenuPosition({ x, y });
    }
  };

  const handleMenuClick = (key: string) => {
    setContextMenuPosition(null);
    
    if (!selectedCell) return;
    
    switch (key) {
      case 'copy':
        copySelectedCells();
        break;
      case 'paste':
        pasteToSelectedCell();
        break;
      case 'cut':
        copySelectedCells();
        // 然后清空单元格
        if (gridRef.current) {
          const api = gridRef.current.api;
          const ranges = api.getCellRanges();
          
          if (ranges && ranges.length > 0) {
            saveUndoState();
            
            const range = ranges[0];
            const startRow = range.startRow.rowIndex;
            const endRow = range.endRow.rowIndex;
            const columns = range.columns;
            
            const newRowData = [...rowData];
            for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
              columns.forEach(col => {
                if (newRowData[rowIndex] && col.colId !== 'rowNum') {
                  newRowData[rowIndex][col.colId] = '';
                }
              });
            }
            
            setRowData(newRowData);
            api.refreshCells();
            setStatusText('已剪切');
          }
        }
        break;
      case 'insert_row':
        // 在选中行上方插入一行
        if (gridRef.current) {
          saveUndoState();
          
          const api = gridRef.current.api;
          const newRowIndex = selectedCell.rowIndex;
          
          // 创建新行
          const newRow: Record<string, any> = { id: `row_${newRowIndex}` };
          const colCount = columnDefs.length - 1; // 减去行号列
          
          // 初始化所有列为空字符串
          for (let i = 0; i < colCount; i++) {
            newRow[`col_${i}`] = '';
          }
          
          // 插入到指定位置
          const newRowData = [
            ...rowData.slice(0, newRowIndex),
            newRow,
            ...rowData.slice(newRowIndex)
          ];
          
          // 更新行ID
          const updatedRowData = newRowData.map((row, index) => ({
            ...row,
            id: `row_${index}`
          }));
          
          setRowData(updatedRowData);
          
          setTimeout(() => {
            api.refreshCells({ force: true });
            api.ensureIndexVisible(newRowIndex, 'middle');
          }, 100);
          
          message.success(`已在第 ${newRowIndex + 1} 行插入新行`);
          setStatusText(`已在第 ${newRowIndex + 1} 行插入新行`);
        }
        break;
      case 'insert_column':
        // 在选中列右侧插入一列
        if (gridRef.current && selectedCell.colId.startsWith('col_')) {
          saveUndoState();
          
          const api = gridRef.current.api;
          
          // 获取当前列索引
          const currentColIndex = parseInt(selectedCell.colId.replace('col_', ''), 10);
          
          // 所有后续列的索引+1
          const newColumnDefs = [...columnDefs];
          const colsToAdd = [];
          
          // 创建新列
          const newColIndex = currentColIndex + 1;
          let newColLetter = '';
          if (newColIndex < 26) {
            newColLetter = String.fromCharCode(65 + newColIndex);
          } else {
            const firstChar = String.fromCharCode(65 + Math.floor((newColIndex - 26) / 26));
            const secondChar = String.fromCharCode(65 + ((newColIndex - 26) % 26));
            newColLetter = firstChar + secondChar;
          }
          
          const newColDef = createColumnDef(
            newColLetter,
            `col_${newColIndex}`
          );
          
          // 找到插入位置
          let insertIndex = -1;
          for (let i = 0; i < newColumnDefs.length; i++) {
            if (newColumnDefs[i].field === selectedCell.colId) {
              insertIndex = i + 1;
              break;
            }
          }
          
          if (insertIndex !== -1) {
            newColumnDefs.splice(insertIndex, 0, newColDef);
            setColumnDefs(newColumnDefs);
            
            // 更新行数据
            const updatedRowData = rowData.map(row => {
              const newRow = { ...row };
              // 给新列添加空值
              newRow[`col_${newColIndex}`] = '';
              return newRow;
            });
            
            setRowData(updatedRowData);
            
            setTimeout(() => {
              api.refreshHeader();
              api.refreshCells({ force: true });
            }, 100);
            
            message.success(`已插入列 ${newColLetter}`);
            setStatusText(`已插入列 ${newColLetter}`);
          }
        }
        break;
      case 'delete_row':
        // 删除选中行
        if (gridRef.current) {
          saveUndoState();
          
          const rowIndex = selectedCell.rowIndex;
          
          // 过滤掉选中的行
          const newRowData = rowData.filter((_, index) => index !== rowIndex);
          
          // 更新行ID
          const updatedRowData = newRowData.map((row, index) => ({
            ...row,
            id: `row_${index}`
          }));
          
          setRowData(updatedRowData);
          
          setTimeout(() => {
            gridRef.current?.api.refreshCells({ force: true });
          }, 100);
          
          message.success(`已删除第 ${rowIndex + 1} 行`);
          setStatusText(`已删除第 ${rowIndex + 1} 行`);
        }
        break;
      case 'delete_column':
        // 删除选中列
        if (gridRef.current && selectedCell.colId.startsWith('col_')) {
          saveUndoState();
          
          // 过滤掉选中的列
          const newColumnDefs = columnDefs.filter(col => col.field !== selectedCell.colId);
          
          // 更新行数据，移除被删除的列
          const newRowData = rowData.map(row => {
            const newRow = { ...row };
            delete newRow[selectedCell.colId];
            return newRow;
          });
          
          // 更新状态
          setColumnDefs(newColumnDefs);
          setRowData(newRowData);
          
          // 刷新网格
          setTimeout(() => {
            gridRef.current?.api.refreshHeader();
            gridRef.current?.api.refreshCells({ force: true });
          }, 100);
          
          message.success(`已删除列`);
          setStatusText(`已删除列`);
        }
        break;
      case 'format_bold':
        applyFormatting('bold');
        break;
      case 'format_italic':
        applyFormatting('italic');
        break;
      case 'format_underline':
        applyFormatting('underline');
        break;
      case 'align_left':
        applyFormatting('align', 'left');
        break;
      case 'align_center':
        applyFormatting('align', 'center');
        break;
      case 'align_right':
        applyFormatting('align', 'right');
        break;
    }
  };

  const contextMenuItems: MenuProps['items'] = [
    {
      key: 'copy',
      label: '复制',
      icon: <CopyOutlined />
    },
    {
      key: 'paste',
      label: '粘贴',
      icon: <SnippetsOutlined />
    },
    {
      key: 'cut',
      label: '剪切',
      icon: <ScissorOutlined />
    },
    {
      type: 'divider'
    },
    {
      key: 'insert_row',
      label: '插入行',
      icon: <PlusOutlined />
    },
    {
      key: 'insert_column',
      label: '插入列',
      icon: <AppstoreAddOutlined />
    },
    {
      key: 'delete_row',
      label: '删除行',
      icon: <DeleteOutlined />
    },
    {
      key: 'delete_column',
      label: '删除列',
      icon: <DeleteOutlined />
    },
    {
      type: 'divider'
    },
    {
      key: 'format_submenu',
      label: '格式',
      children: [
        {
          key: 'format_bold',
          label: '加粗',
          icon: <BoldOutlined />
        },
        {
          key: 'format_italic',
          label: '斜体',
          icon: <ItalicOutlined />
        },
        {
          key: 'format_underline',
          label: '下划线',
          icon: <UnderlineOutlined />
        },
        {
          type: 'divider'
        },
        {
          key: 'align_left',
          label: '左对齐',
          icon: <AlignLeftOutlined />
        },
        {
          key: 'align_center',
          label: '居中对齐',
          icon: <AlignCenterOutlined />
        },
        {
          key: 'align_right',
          label: '右对齐',
          icon: <AlignRightOutlined />
        },
      ]
    }
  ];

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
      },
      // 添加点击行号选中整行的事件处理
      onCellClicked: (params: any) => {
        if (params.node) {
          // 选中当前行
          params.node.setSelected(true);
          // 更新状态栏
          const rowIndex = params.node.rowIndex + 1;
          setStatusText(`已选中第 ${rowIndex} 行`);
        }
      }
    };
  };

  // 添加选中整列的功能
  const selectEntireColumn = (colId: string) => {
    if (!gridRef.current) return;
    
    const api = gridRef.current.api;
    const column = api.getColumn(colId);
    
    if (!column) return;
    
    // 行数
    const rowCount = rowData.length;
    
    // 如果是行号列，不执行选中
    if (colId === 'rowNum') return;
    
    // 创建范围选择
    const startRow = 0;
    const endRow = rowCount - 1;
    
    api.clearRangeSelection();
    
    // 选中整列
    api.addCellRange({
      rowStartIndex: startRow,
      rowEndIndex: endRow,
      columnStart: colId,
      columnEnd: colId
    });
    
    // 更新状态栏
    setStatusText(`已选中 ${column.getColDef().headerName} 列`);
  };

  // 重新定义列定义，添加表头点击事件
  const createColumnDef = (headerName: string, field: string, options: any = {}) => {
    return {
      headerName,
      field,
      editable: true,
      resizable: true,
      sortable: false,
      headerClass: 'excel-centered-header excel-header-clickable',
      suppressMenu: true,
      ...options
    };
  };

  // 手动处理表头点击，因为useEffect中的事件监听不太可靠
  const handleManualHeaderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 先确定是否是点击了表头
    const target = e.target as HTMLElement;
    if (!target || !gridRef.current) return;
    
    // 查找最近的表头单元格元素
    const headerCell = target.closest('.ag-header-cell');
    if (!headerCell) return;
    
    // 获取列ID
    const colId = headerCell.getAttribute('col-id');
    if (!colId || colId === 'rowNum') return; // 忽略行号列
    
    console.log('表头点击 - 选中列:', colId);
    
    // 阻止事件进一步传播，避免触发其他事件
    e.stopPropagation();
    e.preventDefault();
    
    // 选中整列
    selectEntireColumn(colId);
  };

  // 添加useEffect来确保表头可点击
  useEffect(() => {
    // 给所有表头添加特殊的点击事件
    const attachHeaderClickEvents = () => {
      if (!gridRef.current) return;
      
      // 获取所有表头单元格
      const headerCells = document.querySelectorAll('.ag-header-cell:not([col-id="rowNum"])');
      
      headerCells.forEach(cell => {
        // 移除之前可能存在的点击事件
        cell.removeEventListener('click', headerClickHandler);
        
        // 添加新的点击事件
        cell.addEventListener('click', headerClickHandler);
        
        // 添加鼠标悬停样式以表明可点击
        cell.classList.add('excel-header-clickable');
      });
    };
    
    // 表头单元格点击处理函数
    const headerClickHandler = (e: Event) => {
      e.stopPropagation();
      e.preventDefault();
      
      const cell = e.currentTarget as HTMLElement;
      const colId = cell.getAttribute('col-id');
      
      if (colId && colId !== 'rowNum' && gridRef.current) {
        console.log('表头单元格点击 - 选中列:', colId);
        selectEntireColumn(colId);
      }
    };
    
    // 延迟添加事件，确保表格已渲染
    const timer = setTimeout(attachHeaderClickEvents, 500);
    
    // 在表格内容变化时重新附加事件
    gridRef.current?.api?.addEventListener('modelUpdated', attachHeaderClickEvents);
    
    return () => {
      clearTimeout(timer);
      gridRef.current?.api?.removeEventListener('modelUpdated', attachHeaderClickEvents);
      
      // 移除所有事件
      const headerCells = document.querySelectorAll('.ag-header-cell:not([col-id="rowNum"])');
      headerCells.forEach(cell => {
        cell.removeEventListener('click', headerClickHandler);
      });
    };
  }, [rowData.length, columnDefs.length]); // 依赖行数和列数变化

  // 处理表格数据
  const processSheetData = (sheet: Sheet | null): { rowData: any[]; columnDefs: any[] } => {
    const columnDefs: any[] = [addRowNumberColumn()];
    const rowData: any[] = [];

    console.log('正在处理表格数据:', sheet);

    // 如果没有有效的表格数据，创建一个空表格
    if (!sheet || !sheet.data || sheet.data.length === 0) {
      // 创建默认的26列 (A-Z)
      for (let col = 0; col < 26; col++) {
        columnDefs.push(
          createColumnDef(
            String.fromCharCode(65 + col), 
            `col_${col}`
          )
        );
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
      // 确定列标题（超过26列后使用AA, AB等格式）
      let colHeader = '';
      if (col < 26) {
        colHeader = String.fromCharCode(65 + col);
      } else {
        const firstChar = String.fromCharCode(65 + Math.floor((col - 26) / 26));
        const secondChar = String.fromCharCode(65 + ((col - 26) % 26));
        colHeader = firstChar + secondChar;
      }
      
      columnDefs.push(
        createColumnDef(
          colHeader, 
          `col_${col}`
        )
      );
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
        // 新行的索引就是更新后数据的长度减1
        const newRowIndex = updatedRowData.length - 1;
        
        // 确保行可见，滚动到底部
        api.ensureIndexVisible(newRowIndex, 'bottom');
        api.refreshCells({ force: true });
        
        // 可选：聚焦到新行的第一个可编辑单元格
        if (columnDefs.length > 1) {
          const firstEditableColId = columnDefs[1].field; // 第二列（跳过行号列）
          api.startEditingCell({
            rowIndex: newRowIndex,
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
      // 检查是否有单元格范围选择
      const ranges = api.getCellRanges();
      if (ranges && ranges.length > 0) {
        // 获取范围内的行
        const startRow = ranges[0].startRow.rowIndex;
        const endRow = ranges[0].endRow.rowIndex;
        
        // 如果选择的是整行（行首至行尾）
        const columns = ranges[0].columns;
        if (columns.length === columnDefs.length - 1) { // 排除行号列
          // 获取要删除的行索引
          const indicesToDelete: number[] = [];
          for (let i = startRow; i <= endRow; i++) {
            indicesToDelete.push(i);
          }
          
          // 过滤掉选中的行
          const newRowData = rowData.filter((_, index) => !indicesToDelete.includes(index));
          
          // 更新行ID - 重新编号所有行
          const updatedRowData = newRowData.map((row, index) => ({
            ...row,
            id: `row_${index}`
          }));
          
          // 设置新的行数据
          setRowData(updatedRowData);
          
          // 刷新表格
          setTimeout(() => {
            api.refreshCells({ force: true });
          }, 100);
          
          message.success(`已删除 ${indicesToDelete.length} 行`);
          setStatusText(`已删除 ${indicesToDelete.length} 行`);
          return;
        }
      }
      
      message.info('请先选择要删除的行');
      return;
    }
    
    // 获取选中行的索引
    const selectedIndices = selectedNodes.map((node: any) => node.rowIndex);
    
    // 过滤掉选中的行
    const newRowData = rowData.filter((_, index) => !selectedIndices.includes(index));
    
    // 更新行ID - 重新编号所有行
    const updatedRowData = newRowData.map((row, index) => ({
      ...row,
      id: `row_${index}`
    }));
    
    // 设置新的行数据
    setRowData(updatedRowData);
    
    // 刷新表格
    setTimeout(() => {
      api.refreshCells({ force: true });
    }, 100);
    
    message.success(`已删除 ${selectedNodes.length} 行`);
    setStatusText(`已删除 ${selectedNodes.length} 行`);
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
      
      // 获取表头信息
      const headerRow: Record<string, string> = {};
      columnDefs.forEach(col => {
        // 跳过行号列
        if (col.field !== 'rowNum') {
          headerRow[col.field] = col.headerName;
        }
      });
      
      // 收集所有单元格数据
      const rowsData: Record<string, any>[] = [];
      
      // 先添加表头行
      rowsData.push(headerRow);
      
      // 然后添加数据行
      gridApi.forEachNode((node: any) => {
        if (node.data) {
          const rowData: Record<string, any> = {};
          
          // 遍历所有列（除了行号列和id）
          Object.entries(node.data).forEach(([key, value]) => {
            if (key !== 'id' && key !== 'rowNum') {
              rowData[key] = value;
            }
          });
          
          rowsData.push(rowData);
        }
      });

      // 创建工作簿和工作表
      const wb = XLSX.utils.book_new();
      
      // 使用自定义表头创建工作表
      const ws = XLSX.utils.json_to_sheet(rowsData, { skipHeader: true });
      
      XLSX.utils.book_append_sheet(wb, ws, sheet.name || 'Sheet1');
      
      // 导出Excel文件
      XLSX.writeFile(wb, `${sheet.name || 'spreadsheet'}.xlsx`);
      
      message.success('导出成功');
      setStatusText('已导出到Excel文件');
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
          
          // 创建列定义 - 使用我们的createColumnDef函数
          const columnDefs = [addRowNumberColumn()];
          for (let i = 0; i < maxCols; i++) {
            // 使用createColumnDef创建列定义
            let colHeader = '';
            if (i < 26) {
              colHeader = String.fromCharCode(65 + i);
            } else {
              const firstChar = String.fromCharCode(65 + Math.floor((i - 26) / 26));
              const secondChar = String.fromCharCode(65 + ((i - 26) % 26));
              colHeader = firstChar + secondChar;
            }
            
            columnDefs.push(createColumnDef(colHeader, `col_${i}`));
          }

          // 创建行数据
          const rows = jsonArray.map((row: unknown[], rowIndex: number) => {
            const rowData: any = { id: `row_${rowIndex}` };
            
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

          setColumnDefs(columnDefs);
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

  // 添加删除选中列的功能
  const deleteSelectedColumns = () => {
    if (!gridRef.current) return;
    
    // 保存当前状态到撤销栈
    saveUndoState();
    
    const api = gridRef.current.api;
    const ranges = api.getCellRanges();
    
    if (!ranges || ranges.length === 0) {
      message.info('请先选择要删除的列');
      return;
    }
    
    // 获取选中的列
    const selectedColumns = ranges[0].columns;
    if (selectedColumns.length === 0) {
      message.info('请先选择要删除的列');
      return;
    }
    
    // 获取要删除的列ID（排除行号列）
    const colIdsToDelete: string[] = selectedColumns
      .map((col: any) => col.colId)
      .filter((colId: string) => colId !== 'rowNum');
    
    if (colIdsToDelete.length === 0) {
      message.info('不能删除行号列');
      return;
    }
    
    // 保留未被选中的列
    const newColumnDefs = columnDefs.filter(col => !colIdsToDelete.includes(col.field));
    
    // 更新行数据，移除被删除的列
    const newRowData = rowData.map(row => {
      const newRow = { ...row };
      colIdsToDelete.forEach(colId => {
        delete newRow[colId];
      });
      return newRow;
    });
    
    // 更新状态
    setColumnDefs(newColumnDefs);
    setRowData(newRowData);
    
    // 刷新网格
    setTimeout(() => {
      gridRef.current?.api.refreshHeader();
      gridRef.current?.api.refreshCells({ force: true });
    }, 100);
    
    message.success(`已删除 ${colIdsToDelete.length} 列`);
    setStatusText(`已删除 ${colIdsToDelete.length} 列`);
  };

  // 添加新列
  const addNewColumn = () => {
    if (!gridRef.current) return;
    
    // 保存当前状态到撤销栈
    saveUndoState();
    
    // 获取当前列数 (减去行号列)
    const currentColumnCount = columnDefs.length - 1;
    
    // 确定新列的字母标识
    let newColLetter = '';
    if (currentColumnCount < 26) {
      // A-Z
      newColLetter = String.fromCharCode(65 + currentColumnCount);
    } else {
      // 超过26列后使用AA, AB等格式
      const firstChar = String.fromCharCode(65 + Math.floor((currentColumnCount - 26) / 26));
      const secondChar = String.fromCharCode(65 + ((currentColumnCount - 26) % 26));
      newColLetter = firstChar + secondChar;
    }
    
    // 创建新列定义
    const newColDef = createColumnDef(
      newColLetter,
      `col_${currentColumnCount}`
    );
    
    // 更新列定义
    const newColumnDefs = [...columnDefs, newColDef];
    setColumnDefs(newColumnDefs);
    
    // 在所有行中添加新列的空值
    const newRowData = rowData.map(row => {
      return { ...row, [`col_${currentColumnCount}`]: '' };
    });
    setRowData(newRowData);
    
    // 刷新网格
    setTimeout(() => {
      gridRef.current?.api.refreshHeader();
      gridRef.current?.api.refreshCells({ force: true });
    }, 100);
    
    message.success('已添加新列');
    setStatusText(`已添加列 ${newColLetter}`);
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
        <Space wrap>
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
          <Tooltip title="添加列">
            <Button icon={<AppstoreAddOutlined />} onClick={addNewColumn} />
          </Tooltip>
          <Tooltip title="删除选中行">
            <Button icon={<DeleteOutlined />} onClick={deleteSelectedRows} />
          </Tooltip>
          <Tooltip title="删除选中列">
            <Button icon={<ScissorOutlined />} onClick={deleteSelectedColumns} />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="加粗 (Ctrl+B)">
            <Button icon={<BoldOutlined />} onClick={() => applyFormatting('bold')} />
          </Tooltip>
          <Tooltip title="斜体 (Ctrl+I)">
            <Button icon={<ItalicOutlined />} onClick={() => applyFormatting('italic')} />
          </Tooltip>
          <Tooltip title="下划线 (Ctrl+U)">
            <Button icon={<UnderlineOutlined />} onClick={() => applyFormatting('underline')} />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="左对齐">
            <Button icon={<AlignLeftOutlined />} onClick={() => applyFormatting('align', 'left')} />
          </Tooltip>
          <Tooltip title="居中对齐">
            <Button icon={<AlignCenterOutlined />} onClick={() => applyFormatting('align', 'center')} />
          </Tooltip>
          <Tooltip title="右对齐">
            <Button icon={<AlignRightOutlined />} onClick={() => applyFormatting('align', 'right')} />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="冻结窗格">
            <Button icon={<LockOutlined />} onClick={() => freezePane()} />
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
          onContextMenu={handleContextMenu}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              editable: true,
              resizable: true,
              sortable: false,
              filter: true,
              flex: 1,
              minWidth: 80,
              cellStyle: { padding: 0 },
              cellClassRules: {
                'cell-bold': (params: any) => params.data.cellStyles?.[params.column.colId]?.bold === true,
                'cell-italic': (params: any) => params.data.cellStyles?.[params.column.colId]?.italic === true,
                'cell-underline': (params: any) => params.data.cellStyles?.[params.column.colId]?.underline === true,
                'cell-align-left': (params: any) => params.data.cellStyles?.[params.column.colId]?.align === 'left',
                'cell-align-center': (params: any) => params.data.cellStyles?.[params.column.colId]?.align === 'center',
                'cell-align-right': (params: any) => params.data.cellStyles?.[params.column.colId]?.align === 'right',
              }
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
            rowBuffer={50}
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
          {contextMenuPosition && (
            <div 
              style={{
                position: 'absolute',
                top: contextMenuPosition.y,
                left: contextMenuPosition.x,
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                zIndex: 1000
              }}
            >
              <Menu
                items={contextMenuItems}
                onClick={({ key }) => handleMenuClick(key)}
                style={{ minWidth: 160 }}
              />
            </div>
          )}
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
