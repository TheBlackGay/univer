# Univer 后端服务

这是Univer表格应用的后端服务，提供表格保存和数据追加API。

## 功能

- 保存工作簿到MongoDB数据库
- 查询工作簿信息
- 向特定工作表追加数据

## 技术栈

- Node.js
- Express
- MongoDB (Mongoose)
- Cors (跨域资源共享)
- Dotenv (环境变量)
- Morgan (HTTP请求日志)

## 安装

1. 安装依赖
```bash
npm install
```

2. 设置环境变量
```bash
# 复制示例环境变量文件
cp .env.example .env

# 根据需要修改.env文件中的配置
```

## 运行

```bash
# 开发模式
npm run dev

# 生产模式
npm start
```

## API文档

### 保存工作簿

- **URL**: `/api/workbooks`
- **方法**: `POST`
- **请求体**:
  ```json
  {
    "name": "工作簿名称",
    "data": { /* 工作簿数据 */ }
  }
  ```
- **成功响应**:
  ```json
  {
    "success": true,
    "id": "工作簿ID"
  }
  ```

### 获取工作簿

- **URL**: `/api/workbooks/:id`
- **方法**: `GET`
- **成功响应**:
  ```json
  {
    "success": true,
    "workbook": {
      "id": "工作簿ID",
      "name": "工作簿名称",
      "data": { /* 工作簿数据 */ },
      "createdAt": "创建时间",
      "updatedAt": "更新时间"
    }
  }
  ```

### 追加数据

- **URL**: `/api/workbooks/:id/sheets/:sheetId/append`
- **方法**: `POST`
- **请求体**:
  ```json
  {
    "data": [
      ["单元格A1", "单元格B1", "单元格C1"],
      ["单元格A2", "单元格B2", "单元格C2"]
    ]
  }
  ```
- **成功响应**:
  ```json
  {
    "success": true,
    "message": "数据追加成功",
    "rowsAdded": 2,
    "newRowCount": 12
  }
  ``` 