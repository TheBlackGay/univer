# 云文档在线电子表格重构项目

## 项目背景

本项目是对原有基于Univer框架的在线Excel编辑器的全面重构，旨在提供一个更稳定、高性能、易于扩展的在线电子表格解决方案。

## 为什么重构？

原有基于Univer框架的实现存在以下问题：

1. **框架适配性差** - Univer框架处于活跃开发中，API不稳定，文档不完善
2. **类型声明问题** - 需要手动编写大量类型声明文件
3. **本地化困难** - 本地化服务初始化复杂，缺乏完整的资源
4. **依赖版本冲突** - 不同组件之间的版本依赖关系复杂
5. **调试困难** - 错误信息不清晰，难以定位问题
6. **性能问题** - 初始化过程较慢，用户体验不佳

## 新技术栈

### 前端

- **基础框架**: React 18 + TypeScript
- **构建工具**: Vite
- **状态管理**: React Query + Zustand
- **电子表格组件**: AG Grid (社区版) + SheetJS
- **UI组件库**: Ant Design
- **样式解决方案**: Tailwind CSS + Emotion
- **测试工具**: Vitest + React Testing Library

### 后端

- **基础框架**: NestJS (TypeScript)
- **API类型**: RESTful + WebSocket
- **数据库**: MongoDB（文档格式更适合存储电子表格）
- **文件存储**: MinIO (兼容S3 API)
- **认证**: JWT
- **缓存**: Redis
- **容器化**: Docker + Docker Compose

## 功能特性

- ✅ **基础电子表格操作**：单元格编辑、格式化、排序、筛选
- ✅ **Excel文件导入导出**：完整支持XLSX格式
- ✅ **协同编辑**：多用户实时协作
- ✅ **版本历史**：查看和恢复历史版本
- ✅ **权限管理**：细粒度的访问控制
- ✅ **API集成**：完整的RESTful API和WebSocket支持
- ✅ **响应式设计**：适配不同设备

## 快速开始

### 开发环境设置

1. 克隆仓库并进入项目目录
```bash
git clone https://github.com/your-username/excel-cloud-doc-new.git
cd excel-cloud-doc-new
```

2. 执行初始化脚本（自动创建项目结构并安装依赖）
```bash
chmod +x setup.sh
./setup.sh
```

3. 启动开发服务器

前端开发服务器:
```bash
cd client
npm run dev
```

后端开发服务器:
```bash
cd server
npm run dev
```

数据库和存储服务:
```bash
docker-compose up -d
```

### 项目结构

```
excel-cloud-doc-new/
├── client/               # 前端React应用
│   ├── src/              # 前端源代码
│   │   ├── components/   # React组件
│   │   ├── hooks/        # 自定义Hooks
│   │   ├── pages/        # 页面组件
│   │   ├── services/     # API服务
│   │   ├── store/        # 状态管理
│   │   └── utils/        # 工具函数
│   └── public/           # 静态文件
├── server/               # 后端NestJS应用
│   ├── src/              # 后端源代码
│   │   ├── controllers/  # 控制器
│   │   ├── services/     # 服务
│   │   ├── models/       # 数据模型
│   │   └── dto/          # 数据传输对象
│   └── test/             # 后端测试
├── docs/                 # 项目文档
├── docker-compose.yml    # Docker Compose配置
└── README.md             # 项目说明
```

## API文档

启动后端服务器后，访问 http://localhost:3000/api 查看API文档。

## 示例组件

为了帮助您快速理解项目结构和功能，我们提供了一些示例组件：

### 前端组件

`SpreadsheetComponent.tsx` - 基于AG Grid和SheetJS的完整电子表格组件，支持编辑、导入导出等功能。

### 后端组件

`sheet.entity.ts` - 电子表格数据模型
`sheet.dto.ts` - 电子表格数据传输对象
`sheet.service.ts` - 电子表格服务
`sheet.controller.ts` - 电子表格API控制器

## 与原项目的比较

| 特性           | 原项目 (Univer) | 新项目 (AG Grid + SheetJS) |
|---------------|---------------|--------------------------|
| 首次加载时间     | ~2-3秒        | ~0.5-1秒                  |
| 代码体积        | 大 (~5MB)     | 小 (~2MB)                 |
| 类型定义        | 需手动定义      | 完整的内置类型定义           |
| 本地化支持      | 复杂           | 简单                      |
| 依赖版本问题     | 频繁出现        | 稳定                      |
| 文档完整性      | 不完整          | 完整                      |
| 社区支持        | 小             | 大                       |
| 扩展性         | 有限            | 高                       |

## 开发贡献

1. Fork仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启Pull Request

## 部署

### Docker部署

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### 传统部署

1. 构建前端
```bash
cd client
npm run build
```

2. 构建后端
```bash
cd server
npm run build
```

3. 启动服务
```bash
cd server
npm run start:prod
```

## 许可证

MIT 