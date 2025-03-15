# 云文档在线电子表格

基于现代Web技术构建的在线电子表格应用，提供云端文档编辑、导入导出和API集成能力。

## 技术栈

### 前端
- React 18 + TypeScript
- Vite
- AG Grid + SheetJS
- Ant Design
- Tailwind CSS

### 后端
- NestJS
- MongoDB
- Redis
- MinIO

## 快速开始

### 启动开发环境

1. 启动后端服务
```bash
cd server
npm install
npm run dev
```

2. 启动前端服务
```bash
cd client
npm install
npm run dev
```

3. 启动数据库和存储服务
```bash
docker-compose up -d
```

## 功能特性

- 电子表格编辑与格式化
- Excel文件导入导出
- 公式支持
- 多人实时协作
- 版本历史
- API集成

## 文档

- [用户手册](./docs/user-manual.md)
- [API文档](./docs/api-docs.md)
- [开发指南](./docs/developer-guide.md)
