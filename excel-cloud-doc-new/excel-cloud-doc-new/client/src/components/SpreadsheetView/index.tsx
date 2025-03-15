import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Button, Spin, message } from 'antd';
import { SaveOutlined, DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import * as XLSX from 'xlsx';

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
  const [loading, setLoading] = useState(true);
  const [sheet, setSheet] = useState<Sheet | null>(null);
  const [rowData, setRowData] = useState<any[]>([]);
  const [columnDefs, setColumnDefs] = useState<any[]>([]);
  const gridRef = useRef<any>(null);

  // 加载电子表格数据
  useEffect(() => {
    const fetchSheet = async () => {
      try {
        setLoading(true);
        
        // 确保ID是数字
        const numericId = parseInt(id!, 10);
        if (isNaN(numericId)) {
          throw new Error(`无效的ID格式: ${id}`);
        }
        
        const response = await axios.get(`${API_URL}/sheets/${numericId}`);
        const sheetData = response.data;
        setSheet(sheetData);

        // 处理数据格式，转换为AG Grid可用的格式
        processSheetData(sheetData.data);
      } catch (error) {
        console.error('加载电子表格失败:', error);
        message.error('无法加载电子表格');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSheet();
    }
  }, [id]);

  // 处理电子表格数据为AG Grid格式
  const processSheetData = (cells: Cell[]) => {
    if (!cells || cells.length === 0) {
      // 创建一个空白表格
      const emptyCols = Array.from({ length: 26 }, (_, i) => {
        const colId = String.fromCharCode(65 + i); // A-Z
        return {
          headerName: colId,
          field: colId.toLowerCase(),
          editable: true,
          width: 100,
        };
      });
      
      const emptyRows = Array.from({ length: 100 }, (_, i) => {
        const row: any = { id: i };
        emptyCols.forEach((col) => {
          row[col.field] = '';
        });
        return row;
      });
      
      setColumnDefs(emptyCols);
      setRowData(emptyRows);
      return;
    }

    // 确定表格的行数和列数
    const maxRow = Math.max(...cells.map(cell => cell.row)) + 1;
    const maxCol = Math.max(...cells.map(cell => cell.col)) + 1;

    // 创建列定义
    const colDefs = Array.from({ length: maxCol }, (_, i) => {
      const colId = String.fromCharCode(65 + i); // A-Z, 如果超过Z需要额外处理
      return {
        headerName: colId,
        field: `col_${i}`,
        editable: true,
        width: 100,
      };
    });

    // 创建行数据
    const rows = Array.from({ length: maxRow }, (_, rowIndex) => {
      const rowData: any = { id: rowIndex };
      // 初始化所有单元格为空
      for (let colIndex = 0; colIndex < maxCol; colIndex++) {
        rowData[`col_${colIndex}`] = '';
      }
      return rowData;
    });

    // 填充实际数据
    cells.forEach(cell => {
      if (rows[cell.row]) {
        rows[cell.row][`col_${cell.col}`] = cell.value;
      }
    });

    setColumnDefs(colDefs);
    setRowData(rows);
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

      // 转换为后端需要的Cell格式
      const cells: Cell[] = [];
      allData.forEach((rowData, rowIndex) => {
        columnDefs.forEach((col, colIndex) => {
          const cellValue = rowData[col.field];
          if (cellValue !== undefined && cellValue !== '') {
            cells.push({
              row: rowIndex,
              col: colIndex,
              value: cellValue
            });
          }
        });
      });

      console.log('准备发送到后端的数据:', { name: sheet?.name || '未命名电子表格', data: cells });

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
        if (jsonArray.length > 0 && Array.isArray(jsonArray[0])) {
          const columns = jsonArray[0].map((header: unknown, index: number) => ({
            headerName: header ? String(header) : String.fromCharCode(65 + index),
            field: `col_${index}`,
            editable: true,
            width: 100
          }));

          const rows = jsonArray.slice(1).map((row: unknown[], rowIndex: number) => {
            const rowData: any = { id: rowIndex };
            row.forEach((cell: unknown, colIndex: number) => {
              rowData[`col_${colIndex}`] = cell || '';
            });
            return rowData;
          });

          setColumnDefs(columns);
          setRowData(rows);
          
          message.success('导入成功');
        } else {
          message.error('Excel文件格式不正确');
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
          >
            导入
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
          />
        </div>
      </Content>
    </Layout>
  );
};

export default SpreadsheetView; 
