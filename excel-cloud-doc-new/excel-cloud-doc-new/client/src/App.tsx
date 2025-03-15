import { useState, useEffect } from 'react';
import { Layout, Menu, Button, Table, Modal, Form, Input, message, Spin } from 'antd';
import { PlusOutlined, UploadOutlined, DownloadOutlined, FileExcelOutlined } from '@ant-design/icons';
import './App.css';
import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const { Header, Content, Footer } = Layout;
const queryClient = new QueryClient();

// API URL
const API_URL = 'http://localhost:3000/api';

// 文档类型接口
interface Document {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// 主应用组件
function AppContent() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // 获取文档列表
  const { data: documents, isLoading, refetch } = useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      try {
        const response = await axios.get(`${API_URL}/sheets`);
        return response.data as Document[];
      } catch (error) {
        console.error('获取文档列表失败:', error);
        message.error('无法加载文档列表');
        return [] as Document[];
      }
    },
    initialData: [] as Document[]
  });

  // 创建新文档
  const createMutation = useMutation({
    mutationFn: async (values: { name: string }) => {
      return axios.post(`${API_URL}/sheets`, values);
    },
    onSuccess: () => {
      message.success('文档创建成功');
      setIsModalVisible(false);
      form.resetFields();
      refetch();
    },
    onError: (error) => {
      console.error('创建文档失败:', error);
      message.error('创建文档失败');
    }
  });

  // 打开文档
  const openDocument = (id: string) => {
    // 确保ID是数字
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      message.error(`无效的ID格式: ${id}`);
      return;
    }
    window.open(`/spreadsheet/${numericId}`, '_blank');
  };

  // 表格列定义
  const columns = [
    {
      title: '文档名称',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Document) => (
        <a onClick={() => openDocument(record.id)}>
          <FileExcelOutlined style={{ marginRight: 8 }} />
          {text}
        </a>
      )
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text: string) => new Date(text).toLocaleString()
    },
    {
      title: '修改时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text: string) => new Date(text).toLocaleString()
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Document) => (
        <div>
          <Button 
            icon={<DownloadOutlined />} 
            onClick={() => downloadDocument(record.id)}
            style={{ marginRight: 8 }}
          >
            下载
          </Button>
          <Button 
            danger
            onClick={() => deleteDocument(record.id)}
            style={{ marginRight: 8 }}
          >
            删除
          </Button>
        </div>
      )
    }
  ];

  // 下载文档
  const downloadDocument = async (id: string) => {
    try {
      // 确保ID是数字
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        throw new Error(`无效的ID格式: ${id}`);
      }
      
      const response = await axios.get(`${API_URL}/sheets/${numericId}/export`, {
        responseType: 'blob'
      });
      
      // 创建下载链接
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `document-${id}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      message.success('文档下载成功');
    } catch (error) {
      console.error('下载失败:', error);
      message.error('下载文档失败');
    }
  };

  // 删除文档
  const deleteDocument = async (id: string) => {
    try {
      // 确保ID是数字
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        throw new Error(`无效的ID格式: ${id}`);
      }
      
      // 弹出确认对话框
      Modal.confirm({
        title: '确认删除',
        content: '确定要删除这个文档吗？此操作不可恢复。',
        okText: '确认',
        cancelText: '取消',
        onOk: async () => {
          await axios.delete(`${API_URL}/sheets/${numericId}`);
          message.success('文档已删除');
          refetch(); // 重新加载文档列表
        }
      });
    } catch (error) {
      console.error('删除失败:', error);
      message.error('删除文档失败');
    }
  };

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" />
        <div style={{ marginRight: 'auto', color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
          Excel云文档系统
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { key: '1', label: '我的文档' },
            { key: '2', label: '最近打开' },
            { key: '3', label: '帮助' }
          ]}
        />
      </Header>
      
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ margin: '16px 0' }}>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
            >
              新建文档
            </Button>
            <Button 
              icon={<UploadOutlined />}
            >
              导入
            </Button>
          </div>
          
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <Spin size="large" />
            </div>
          ) : (
            <Table 
              columns={columns} 
              dataSource={documents} 
              rowKey="id" 
              pagination={{ pageSize: 10 }}
            />
          )}
        </div>
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>
        Excel云文档系统 ©{new Date().getFullYear()} Created by Team
      </Footer>
      
      {/* 新建文档模态框 */}
      <Modal
        title="新建文档"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
        okText="创建"
        cancelText="取消"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => createMutation.mutate(values)}
        >
          <Form.Item
            name="name"
            label="文档名称"
            rules={[{ required: true, message: '请输入文档名称' }]}
          >
            <Input placeholder="请输入文档名称" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
}

// 应用程序入口
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
