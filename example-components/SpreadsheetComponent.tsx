import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as XLSX from 'xlsx';
import { Button, Upload, message, Spin, Input, Space, Tooltip } from 'antd';
import { 
  UploadOutlined, 
  DownloadOutlined, 
  PlusOutlined, 
  SaveOutlined,
  ReloadOutlined,
  FileExcelOutlined
} from '@ant-design/icons';
import type { UploadProps } from 'antd';
import type { ColDef, CellValueChangedEvent } from 'ag-grid-community';

// 表格默认列数和行数
const DEFAULT_COLUMNS = 10;
const DEFAULT_ROWS = 20;

// 生成默认列定义
const generateDefaultColDefs = (count: number): ColDef[] => {
  const cols: ColDef[] = [{
    headerName: '',
    field: 'rowIndex',
    width: 50,
    pinned: 'left',
    valueGetter: (params) => params.node?.rowIndex !== undefined ? params.node.rowIndex + 1 : '',
    cellStyle: { 
      backgroundColor: '#f5f5f5', 
      fontWeight: 'bold',
      borderRight: '1px solid #ddd'
    },
    editable: false
  }];
  
  for (let i = 0; i < count; i++) {
    const colId = String.fromCharCode(65 + i); // A, B, C, ...
    cols.push({
      headerName: colId,
      field: colId,
      editable: true,
      width: 120,
      resizable: true,
      sortable: true,
      filter: true
    });
  }
  
  return cols;
};

// 生成默认行数据
const generateDefaultRowData = (rows: number, cols: number): Record<string, any>[] => {
  const rowData = [];
  
  for (let i = 0; i < rows; i++) {
    const row: Record<string, any> = {};
    for (let j = 0; j < cols; j++) {
      const colId = String.fromCharCode(65 + j);
      row[colId] = '';
    }
    rowData.push(row);
  }
  
  return rowData;
};

const SpreadsheetComponent: React.FC = () => {
  // 状态
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
  const [rowData, setRowData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [docTitle, setDocTitle] = useState('新建电子表格');
  const [isDirty, setIsDirty] = useState(false);
  
  // AG Grid API 引用
  const gridRef = useRef<AgGridReact>(null);
  
  // 初始化表格
  useEffect(() => {
    setColumnDefs(generateDefaultColDefs(DEFAULT_COLUMNS));
    setRowData(generateDefaultRowData(DEFAULT_ROWS, DEFAULT_COLUMNS));
  }, []);
  
  // 处理单元格修改
  const handleCellValueChanged = (event: CellValueChangedEvent) => {
    setIsDirty(true);
  };
  
  // 创建新表格
  const handleNewSheet = () => {
    if (isDirty) {
      if (!window.confirm('当前表格有未保存的更改，确定要创建新表格吗？')) {
        return;
      }
    }
    
    setColumnDefs(generateDefaultColDefs(DEFAULT_COLUMNS));
    setRowData(generateDefaultRowData(DEFAULT_ROWS, DEFAULT_COLUMNS));
    setDocTitle('新建电子表格');
    setIsDirty(false);
  };
  
  // 保存表格（模拟）
  const handleSaveSheet = () => {
    setLoading(true);
    
    // 模拟API保存请求
    setTimeout(() => {
      setLoading(false);
      setIsDirty(false);
      message.success('表格已保存');
    }, 800);
  };
  
  // 导出为Excel
  const handleExportExcel = () => {
    if (!gridRef.current?.api) return;
    
    setLoading(true);
    
    try {
      // 准备数据
      const exportData = rowData.map(row => {
        const newRow: Record<string, any> = {};
        for (const key in row) {
          if (key !== 'rowIndex') {
            newRow[key] = row[key];
          }
        }
        return newRow;
      });
      
      // 创建工作簿和工作表
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(exportData, {
        skipHeader: true
      });
      
      // 设置表头
      const headerRow: Record<string, string> = {};
      columnDefs.forEach(col => {
        if (col.field && col.field !== 'rowIndex') {
          headerRow[col.field] = col.headerName || col.field;
        }
      });
      XLSX.utils.sheet_add_json(ws, [headerRow], {
        skipHeader: true,
        origin: 'A1'
      });
      
      // 将工作表添加到工作簿
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      
      // 下载文件
      XLSX.writeFile(wb, `${docTitle}.xlsx`);
      
      message.success('Excel文件已导出');
    } catch (error) {
      console.error('导出Excel失败:', error);
      message.error('导出Excel失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 处理Excel导入
  const handleImportExcel: UploadProps['customRequest'] = (options) => {
    if (!options.file) return;
    
    setLoading(true);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result;
        if (!result) throw new Error('无法读取文件');
        
        // 读取Excel文件
        const wb = XLSX.read(result, { type: 'array' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        
        // 将Excel数据转换为JSON
        const data = XLSX.utils.sheet_to_json(ws, { header: 'A' });
        
        // 处理列定义
        const maxColIndex = Object.keys(data[0] || {}).reduce((max, key) => {
          if (key.match(/^[A-Z]+$/)) {
            const charCode = key.charCodeAt(0);
            return Math.max(max, charCode - 65 + 1);
          }
          return max;
        }, DEFAULT_COLUMNS);
        
        setColumnDefs(generateDefaultColDefs(maxColIndex));
        setRowData(data as any[]);
        
        // 更新文档标题
        const filename = (options.file as File).name;
        setDocTitle(filename.replace(/\.[^/.]+$/, ''));
        
        message.success('Excel文件已导入');
        setIsDirty(false);
      } catch (error) {
        console.error('导入Excel失败:', error);
        message.error('导入Excel失败，请检查文件格式');
      } finally {
        setLoading(false);
      }
    };
    
    reader.readAsArrayBuffer(options.file as Blob);
  };
  
  // 刷新数据
  const handleRefresh = () => {
    setLoading(true);
    
    // 模拟API请求
    setTimeout(() => {
      setLoading(false);
      message.info('数据已刷新');
    }, 800);
  };
  
  // 上传按钮属性
  const uploadProps: UploadProps = {
    customRequest: handleImportExcel,
    showUploadList: false,
    accept: '.xlsx,.xls',
    beforeUpload: (file) => {
      const isExcel = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                      file.type === 'application/vnd.ms-excel';
      if (!isExcel) {
        message.error('只能上传Excel文件!');
        return Upload.LIST_IGNORE;
      }
      return true;
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <Spin spinning={loading} tip="处理中...">
        <div className="bg-white p-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <FileExcelOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
            <Input 
              value={docTitle}
              onChange={(e) => {
                setDocTitle(e.target.value);
                setIsDirty(true);
              }}
              className="border-none hover:border hover:border-solid hover:border-gray-300 font-medium text-lg w-64"
            />
            {isDirty && <span className="text-gray-400 text-sm">(未保存)</span>}
          </div>
          
          <Space>
            <Tooltip title="新建">
              <Button 
                icon={<PlusOutlined />} 
                onClick={handleNewSheet}
              />
            </Tooltip>
            
            <Tooltip title="导入Excel">
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>导入</Button>
              </Upload>
            </Tooltip>
            
            <Tooltip title="导出Excel">
              <Button 
                icon={<DownloadOutlined />} 
                onClick={handleExportExcel}
              >
                导出
              </Button>
            </Tooltip>
            
            <Tooltip title="保存">
              <Button 
                type="primary" 
                icon={<SaveOutlined />} 
                onClick={handleSaveSheet}
                disabled={!isDirty}
              >
                保存
              </Button>
            </Tooltip>
            
            <Tooltip title="刷新">
              <Button 
                icon={<ReloadOutlined />} 
                onClick={handleRefresh}
              />
            </Tooltip>
          </Space>
        </div>
        
        <div 
          className="ag-theme-alpine w-full"
          style={{ height: 'calc(100vh - 120px)' }}
        >
          <AgGridReact
            ref={gridRef}
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={{
              resizable: true,
              sortable: true,
              filter: true
            }}
            enableRangeSelection={true}
            suppressRowClickSelection={true}
            onCellValueChanged={handleCellValueChanged}
            rowSelection="multiple"
            copyHeadersToClipboard={true}
            undoRedoCellEditing={true}
            undoRedoCellEditingLimit={20}
          />
        </div>
      </Spin>
    </div>
  );
};

export default SpreadsheetComponent; 