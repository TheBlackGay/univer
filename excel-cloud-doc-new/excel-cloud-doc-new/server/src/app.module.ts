import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetModule } from './modules/sheet/sheet.module';
import { Sheet } from './modules/sheet/entities/sheet.entity';

@Module({
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    
    // 数据库模块 - 使用SQLite代替MongoDB
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: './data/excel-cloud-doc.sqlite',
        entities: [Sheet],
        synchronize: process.env.NODE_ENV !== 'production', // 开发环境自动同步模型到数据库
        autoLoadEntities: true,
      }),
    }),
    
    // 功能模块
    SheetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
