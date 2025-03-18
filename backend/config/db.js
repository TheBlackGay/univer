const mongoose = require('mongoose');

// 内存存储对象，用于在没有MongoDB的情况下模拟存储
const inMemoryDB = {
  workbooks: new Map(),
  counters: { workbooks: 0 }
};

/**
 * 连接到MongoDB数据库或使用内存存储
 */
const connectDB = async () => {
  // 检查是否应该使用内存存储
  const useInMemory = process.env.USE_IN_MEMORY_DB === 'true' || !process.env.MONGO_URI;
  
  if (useInMemory) {
    console.log('使用内存存储，无需连接到MongoDB');
    return { inMemoryDB };
  }
  
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/univer-db');
    
    console.log(`MongoDB 连接成功: ${conn.connection.host}`);
    
    return conn;
  } catch (error) {
    console.error(`MongoDB 连接失败: ${error.message}`);
    console.log('退回到使用内存存储');
    return { inMemoryDB };
  }
};

module.exports = { connectDB, inMemoryDB }; 