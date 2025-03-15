import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 启用CORS - 简化配置
  app.enableCors({
    origin: true, // 允许所有源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  // 全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));
  
  // API前缀
  app.setGlobalPrefix('api');
  
  // Swagger文档
  const config = new DocumentBuilder()
    .setTitle('Excel云文档 API')
    .setDescription('Excel云文档系统的API文档')
    .setVersion('1.0')
    .addTag('sheets', '电子表格操作')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  
  // 添加日志中间件
  app.use((req, res, next) => {
    console.log(`接收到请求: ${req.method} ${req.url}`);
    if (['POST', 'PUT'].includes(req.method)) {
      console.log('请求体:', JSON.stringify(req.body, null, 2));
    }
    next();
  });
  
  // 启动服务器
  const port = process.env.PORT || 3000; // 修改为3000端口
  await app.listen(port);
  console.log(`服务器已启动，监听端口: ${port}`);
}

bootstrap();
