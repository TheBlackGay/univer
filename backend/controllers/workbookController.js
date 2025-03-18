const Workbook = require('../models/Workbook');
const { inMemoryDB } = require('../config/db');

/**
 * 使用内存存储代替MongoDB
 * @param {boolean} useInMemory 是否使用内存存储
 * @returns {Object} 内存存储对象
 */
const getStorage = () => {
  const useInMemory = process.env.USE_IN_MEMORY_DB === 'true' || !process.env.MONGO_URI;
  return { useInMemory, inMemoryDB };
};

/**
 * 创建并保存新工作簿
 * @route POST /api/workbooks
 * @access Public
 */
exports.saveWorkbook = async (req, res) => {
  try {
    const { name, data } = req.body;

    if (!name || !data) {
      return res.status(400).json({ 
        success: false, 
        message: '名称和数据是必需的' 
      });
    }

    const { useInMemory, inMemoryDB } = getStorage();

    if (useInMemory) {
      // 使用内存存储
      const id = `wb_${++inMemoryDB.counters.workbooks}`;
      const sheetRowCounts = new Map();
      
      // 初始化每个sheet的行数记录
      if (data && data.sheets) {
        Object.keys(data.sheets).forEach(sheetId => {
          const sheet = data.sheets[sheetId];
          if (sheet && typeof sheet.rowCount === 'number') {
            sheetRowCounts.set(sheetId, sheet.rowCount);
          }
        });
      }
      
      const workbook = {
        _id: id,
        name,
        data,
        sheetRowCounts,
        createdAt: new Date(),
        updatedAt: new Date(),
        getSheetRowCount(sheetId) {
          return this.sheetRowCounts.get(sheetId) || 0;
        },
        updateSheetRowCount(sheetId, rows) {
          const currentCount = this.sheetRowCounts.get(sheetId) || 0;
          this.sheetRowCounts.set(sheetId, currentCount + rows);
        }
      };
      
      inMemoryDB.workbooks.set(id, workbook);
      
      return res.status(201).json({
        success: true,
        id
      });
    }

    // 使用MongoDB
    const workbook = new Workbook({
      name,
      data
    });

    // 初始化每个sheet的行数记录
    workbook.initializeSheetRowCounts();

    // 保存到数据库
    await workbook.save();

    res.status(201).json({
      success: true,
      id: workbook._id
    });
  } catch (error) {
    console.error('保存工作簿失败:', error);
    res.status(500).json({
      success: false,
      message: '保存工作簿失败',
      error: error.message
    });
  }
};

/**
 * 获取工作簿信息
 * @route GET /api/workbooks/:id
 * @access Public
 */
exports.getWorkbook = async (req, res) => {
  try {
    const { useInMemory, inMemoryDB } = getStorage();
    let workbook;

    if (useInMemory) {
      // 使用内存存储
      workbook = inMemoryDB.workbooks.get(req.params.id);
      
      if (!workbook) {
        return res.status(404).json({
          success: false,
          message: '未找到该工作簿'
        });
      }
      
      return res.status(200).json({
        success: true,
        workbook: {
          id: workbook._id,
          name: workbook.name,
          data: workbook.data,
          createdAt: workbook.createdAt,
          updatedAt: workbook.updatedAt
        }
      });
    }

    // 使用MongoDB
    workbook = await Workbook.findById(req.params.id);
    
    if (!workbook) {
      return res.status(404).json({
        success: false,
        message: '未找到该工作簿'
      });
    }

    res.status(200).json({
      success: true,
      workbook: {
        id: workbook._id,
        name: workbook.name,
        data: workbook.data,
        createdAt: workbook.createdAt,
        updatedAt: workbook.updatedAt
      }
    });
  } catch (error) {
    console.error('获取工作簿失败:', error);
    res.status(500).json({
      success: false,
      message: '获取工作簿失败',
      error: error.message
    });
  }
};

/**
 * 向指定工作簿的工作表追加数据
 * @route POST /api/workbooks/:id/sheets/:sheetId/append
 * @access Public
 */
exports.appendData = async (req, res) => {
  try {
    const { id, sheetId } = req.params;
    const { data } = req.body;
    
    if (!Array.isArray(data) || !data.every(row => Array.isArray(row))) {
      return res.status(400).json({
        success: false,
        message: '数据必须是二维数组'
      });
    }

    const { useInMemory, inMemoryDB } = getStorage();
    let workbook;

    if (useInMemory) {
      // 使用内存存储
      workbook = inMemoryDB.workbooks.get(id);
      
      if (!workbook) {
        return res.status(404).json({
          success: false,
          message: '未找到该工作簿'
        });
      }
      
      // 检查工作表是否存在
      if (!workbook.data.sheets || !workbook.data.sheets[sheetId]) {
        return res.status(404).json({
          success: false,
          message: '未找到该工作表'
        });
      }
      
      // 获取当前工作表的行数
      const currentRowCount = workbook.getSheetRowCount(sheetId);
      const sheet = workbook.data.sheets[sheetId];
      
      // 如果工作表的cellData不存在，创建它
      if (!sheet.cellData) {
        sheet.cellData = {};
      }
      
      // 追加数据到工作表
      data.forEach((row, rowIndex) => {
        const targetRow = currentRowCount + rowIndex;
        
        if (!sheet.cellData[targetRow]) {
          sheet.cellData[targetRow] = {};
        }
        
        row.forEach((cellValue, colIndex) => {
          // 添加单元格数据，根据类型区分处理
          if (typeof cellValue === 'number') {
            sheet.cellData[targetRow][colIndex] = { v: cellValue, t: 2 }; // 数字类型
          } else if (typeof cellValue === 'boolean') {
            sheet.cellData[targetRow][colIndex] = { v: cellValue, t: 3 }; // 布尔类型
          } else if (cellValue instanceof Date) {
            sheet.cellData[targetRow][colIndex] = { v: cellValue.toISOString(), t: 4 }; // 日期类型
          } else {
            sheet.cellData[targetRow][colIndex] = { v: String(cellValue), t: 0 }; // 字符串类型
          }
        });
      });
      
      // 更新工作表的行数记录
      workbook.updateSheetRowCount(sheetId, data.length);
      
      // 如果需要，更新工作表的行数
      if (sheet.rowCount < currentRowCount + data.length) {
        sheet.rowCount = currentRowCount + data.length;
      }
      
      // 更新时间
      workbook.updatedAt = new Date();
      
      return res.status(200).json({
        success: true,
        message: '数据追加成功',
        rowsAdded: data.length,
        newRowCount: currentRowCount + data.length
      });
    }

    // 使用MongoDB
    workbook = await Workbook.findById(id);
    
    if (!workbook) {
      return res.status(404).json({
        success: false,
        message: '未找到该工作簿'
      });
    }
    
    // 检查工作表是否存在
    if (!workbook.data.sheets || !workbook.data.sheets[sheetId]) {
      return res.status(404).json({
        success: false,
        message: '未找到该工作表'
      });
    }
    
    // 获取当前工作表的行数
    const currentRowCount = workbook.getSheetRowCount(sheetId);
    const sheet = workbook.data.sheets[sheetId];
    
    // 如果工作表的cellData不存在，创建它
    if (!sheet.cellData) {
      sheet.cellData = {};
    }
    
    // 追加数据到工作表
    data.forEach((row, rowIndex) => {
      const targetRow = currentRowCount + rowIndex;
      
      if (!sheet.cellData[targetRow]) {
        sheet.cellData[targetRow] = {};
      }
      
      row.forEach((cellValue, colIndex) => {
        // 添加单元格数据，根据类型区分处理
        if (typeof cellValue === 'number') {
          sheet.cellData[targetRow][colIndex] = { v: cellValue, t: 2 }; // 数字类型
        } else if (typeof cellValue === 'boolean') {
          sheet.cellData[targetRow][colIndex] = { v: cellValue, t: 3 }; // 布尔类型
        } else if (cellValue instanceof Date) {
          sheet.cellData[targetRow][colIndex] = { v: cellValue.toISOString(), t: 4 }; // 日期类型
        } else {
          sheet.cellData[targetRow][colIndex] = { v: String(cellValue), t: 0 }; // 字符串类型
        }
      });
    });
    
    // 更新工作表的行数记录
    workbook.updateSheetRowCount(sheetId, data.length);
    
    // 如果需要，更新工作表的行数
    if (sheet.rowCount < currentRowCount + data.length) {
      sheet.rowCount = currentRowCount + data.length;
    }
    
    // 标记文档已修改(这是mongoose要求的)
    workbook.markModified('data');
    workbook.markModified('sheetRowCounts');
    
    // 保存工作簿
    await workbook.save();
    
    res.status(200).json({
      success: true,
      message: '数据追加成功',
      rowsAdded: data.length,
      newRowCount: currentRowCount + data.length
    });
  } catch (error) {
    console.error('追加数据失败:', error);
    res.status(500).json({
      success: false,
      message: '追加数据失败',
      error: error.message
    });
  }
}; 