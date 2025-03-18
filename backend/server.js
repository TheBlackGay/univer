const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { connectDB } = require('./config/db');
const workbookRoutes = require('./routes/workbookRoutes');

// 加载环境变量
dotenv.config();

// 连接数据库或初始化内存存储
connectDB().then(() => {
  console.log('数据库连接或内存存储初始化完成');
}).catch(err => {
  console.error('初始化存储失败:', err);
});

// 创建Express应用
const app = express();

// CORS配置 - 允许所有来源的请求
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 中间件
app.use(express.json({ limit: '50mb' })); // 增加请求体限制，因为工作簿数据可能较大
app.use(express.urlencoded({ extended: false }));

// 开发环境下的日志
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/api', workbookRoutes);

// 根路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 处理未找到的路由
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '未找到该API路由'
  });
});

// 启动服务器
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`服务器运行在${process.env.NODE_ENV}模式下，端口: ${PORT}`);
  console.log(`API测试页面: http://localhost:${PORT}/`);
}); 