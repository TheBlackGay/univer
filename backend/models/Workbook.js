const mongoose = require('mongoose');

/**
 * 工作簿模型
 */
const workbookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    data: {
      type: Object,
      required: true
    },
    // 记录各个sheet的行数，用于追加数据时确定行位置
    sheetRowCounts: {
      type: Map,
      of: Number,
      default: new Map()
    }
  },
  {
    timestamps: true
  }
);

/**
 * 更新sheet的行数信息，用于数据追加功能
 * @param {string} sheetId 工作表ID
 * @param {number} rows 新增的行数
 */
workbookSchema.methods.updateSheetRowCount = function(sheetId, rows) {
  const currentCount = this.sheetRowCounts.get(sheetId) || 0;
  this.sheetRowCounts.set(sheetId, currentCount + rows);
};

/**
 * 获取特定sheet当前的行数
 * @param {string} sheetId 工作表ID
 * @returns {number} 当前行数
 */
workbookSchema.methods.getSheetRowCount = function(sheetId) {
  return this.sheetRowCounts.get(sheetId) || 0;
};

/**
 * 初始化工作簿的sheet行数记录
 */
workbookSchema.methods.initializeSheetRowCounts = function() {
  if (this.data && this.data.sheets) {
    Object.keys(this.data.sheets).forEach(sheetId => {
      const sheet = this.data.sheets[sheetId];
      if (sheet && typeof sheet.rowCount === 'number') {
        this.sheetRowCounts.set(sheetId, sheet.rowCount);
      }
    });
  }
};

const Workbook = mongoose.model('Workbook', workbookSchema);

module.exports = Workbook; 