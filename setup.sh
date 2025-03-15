#!/bin/bash

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 输出带颜色的信息
info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查依赖
check_dependency() {
    if ! command -v $1 &> /dev/null; then
        error "$1 未安装，请先安装 $1"
        exit 1
    fi
}

# 检查基本依赖
check_dependency "node"
check_dependency "npm"
check_dependency "git"

# 获取Node.js版本
NODE_VERSION=$(node -v)
info "检测到 Node.js 版本: $NODE_VERSION"

# 检查Node.js版本是否大于等于16
if [[ ${NODE_VERSION:1:2} -lt 16 ]]; then
    error "Node.js 版本需要 >= 16.0.0"
    exit 1
fi

# 创建项目目录结构
setup_project() {
    PROJECT_NAME="excel-cloud-doc-new"
    
    # 创建前端项目
    info "创建前端项目..."
    npm create vite@latest $PROJECT_NAME/client -- --template react-ts
    cd $PROJECT_NAME/client
    
    # 安装依赖
    info "安装前端依赖..."
    npm install ag-grid-community ag-grid-react xlsx zustand react-query @ant-design/icons antd tailwindcss @emotion/react @emotion/styled
    npm install -D vitest @testing-library/react @testing-library/jest-dom eslint prettier eslint-plugin-react typescript
    
    # 配置Tailwind CSS
    info "配置 Tailwind CSS..."
    npx tailwindcss init -p
    
    # 创建Tailwind配置
    cat > tailwind.config.js << EOF
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

    # 添加Tailwind指令到index.css
    cat > src/index.css << EOF
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #1677ff;
  --background-color: #f5f5f5;
  --text-color: #333;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color);
  color: var(--text-color);
}
EOF

    # 返回上级目录
    cd ..
    
    # 创建后端项目
    info "创建后端项目..."
    mkdir -p server
    cd server
    
    # 初始化package.json
    npm init -y
    
    # 安装依赖
    info "安装后端依赖..."
    npm install @nestjs/common @nestjs/core @nestjs/platform-express @nestjs/config @nestjs/typeorm typeorm mongodb @nestjs/jwt @nestjs/websockets socket.io jsonwebtoken bcrypt class-validator class-transformer
    npm install -D typescript ts-node @types/express @types/node nodemon @types/bcrypt @types/jsonwebtoken
    
    # 创建基本的tsconfig.json
    cat > tsconfig.json << EOF
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true
  }
}
EOF

    # 创建基本的文件结构
    mkdir -p src/controllers src/services src/models src/config src/middlewares src/utils
    
    # 创建入口文件
    cat > src/main.ts << EOF
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);
  console.log(\`应用已启动: http://localhost:3000\`);
}
bootstrap();
EOF

    # 创建应用模块
    cat > src/app.module.ts << EOF
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
EOF

    # 创建示例控制器
    cat > src/controllers/sheet.controller.ts << EOF
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('sheets')
export class SheetController {
  @Get()
  findAll() {
    return { message: '获取所有电子表格' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: \`获取ID为\${id}的电子表格\` };
  }

  @Post()
  create(@Body() createSheetDto: any) {
    return { message: '创建新的电子表格', data: createSheetDto };
  }
}
EOF

    # 添加脚本到package.json
    npx json -I -f package.json -e "this.scripts = { 
      ...this.scripts, 
      'start': 'node dist/main.js',
      'dev': 'nodemon --watch src/**/*.ts --exec ts-node src/main.ts',
      'build': 'tsc',
      'test': 'jest'
    }"
    
    # 返回项目根目录
    cd ..
    
    # 创建docker-compose.yml
    cat > docker-compose.yml << EOF
version: '3.8'

services:
  mongodb:
    image: mongo:latest
    container_name: mongodb
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongodb_data:/data/db

  redis:
    image: redis:alpine
    container_name: redis
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  minio:
    image: minio/minio:latest
    container_name: minio
    restart: always
    ports:
      - "9000:9000"
      - "9001:9001"
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    volumes:
      - minio_data:/data
    command: server /data --console-address ":9001"

volumes:
  mongodb_data:
  redis_data:
  minio_data:
EOF

    # 创建项目README
    cat > README.md << EOF
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
\`\`\`bash
cd server
npm install
npm run dev
\`\`\`

2. 启动前端服务
\`\`\`bash
cd client
npm install
npm run dev
\`\`\`

3. 启动数据库和存储服务
\`\`\`bash
docker-compose up -d
\`\`\`

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
EOF

    # 创建文档目录
    mkdir -p docs
    
    success "项目 $PROJECT_NAME 创建成功！"
}

# 执行项目设置
setup_project 