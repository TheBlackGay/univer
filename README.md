# 云文档在线电子表格

基于 [Univer](https://github.com/dream-num/univer) 构建的在线电子表格应用，支持API更新文档和导入导出功能。

## 主要功能

- 💯 创建和编辑在线电子表格
- 📥 导入XLSX文件
- 📤 导出为XLSX格式
- 💾 保存到服务器
- 🔄 API更新文档内容

## 技术栈

- 前端：TypeScript + Univer
- 后端：Node.js + Express

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式运行

同时启动前端和后端服务：

```bash
npm run dev
```

单独启动前端：

```bash
npm run dev:client
```

单独启动后端：

```bash
npm run dev:server
```

### 构建

```bash
npm run build
```

### 运行生产版本

```bash
npm start
```

## API 接口

### 保存工作簿

```
POST /api/save
Content-Type: application/json

{
  "id": "workbook-id",
  "name": "工作簿名称",
  "sheets": [
    {
      "id": "sheet-id",
      "name": "Sheet1",
      "cellData": {...},
      "rowCount": 100,
      "columnCount": 26
    }
  ],
  "activeSheet": "sheet-id"
}
```

### 获取工作簿

```
GET /api/workbook/:id
```

### 获取工作簿列表

```
GET /api/workbooks
```

### 更新单元格

```
POST /api/workbook/:id/cell
Content-Type: application/json

{
  "sheetId": "sheet-id",
  "row": 0,
  "col": 0,
  "value": "单元格内容"
}
```

### 导入XLSX

```
POST /api/import
Content-Type: multipart/form-data

file: [XLSX文件]
```

### 导出XLSX

```
GET /api/export/:id?format=xlsx
```

## 项目结构

```
├── public/                 # 静态资源
├── src/
│   ├── client/             # 客户端代码
│   │   ├── api/            # API客户端
│   │   ├── index.ts        # 客户端入口
│   │   ├── styles.css      # 样式
│   │   ├── ui.ts           # UI交互
│   │   └── utils.ts        # 工具函数
│   └── server/             # 服务端代码
│       ├── index.ts        # 服务端入口
│       ├── routes/         # 路由处理
│       └── services/       # 服务类
├── data/                   # 数据存储目录
│   ├── workbooks/          # 工作簿存储
│   ├── uploads/            # 上传文件临时存储
│   └── exports/            # 导出文件临时存储
├── tsconfig.json           # TypeScript配置(客户端)
├── tsconfig.server.json    # TypeScript配置(服务端)
├── webpack.config.js       # Webpack配置
└── package.json            # 项目配置
```

## 扩展功能

1. **多用户协作**：可以基于此项目扩展实现多用户协作编辑功能
2. **权限控制**：可以添加用户角色和权限系统
3. **版本历史**：可以实现文档版本控制和历史记录功能
4. **自动保存**：可以添加自动保存功能

## 许可证

ISC