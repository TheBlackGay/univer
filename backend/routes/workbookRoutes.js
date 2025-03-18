const express = require('express');
const router = express.Router();
const workbookController = require('../controllers/workbookController');

// 保存工作簿
router.post('/workbooks', workbookController.saveWorkbook);

// 获取工作簿信息
router.get('/workbooks/:id', workbookController.getWorkbook);

// 向工作表追加数据
router.post('/workbooks/:id/sheets/:sheetId/append', workbookController.appendData);

module.exports = router; 