import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetController } from './controllers/sheet.controller';
import { SheetService } from './services/sheet.service';
import { Sheet } from './entities/sheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sheet])],
  controllers: [SheetController],
  providers: [SheetService],
  exports: [SheetService],
})
export class SheetModule {} 