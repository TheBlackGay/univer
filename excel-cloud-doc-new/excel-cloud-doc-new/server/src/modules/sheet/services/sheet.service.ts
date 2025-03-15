import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sheet, Cell } from '../entities/sheet.entity';
import { CreateSheetDto, UpdateSheetDto, SheetResponseDto } from '../dto/sheet.dto';

@Injectable()
export class SheetService {
  constructor(
    @InjectRepository(Sheet)
    private sheetRepository: Repository<Sheet>,
  ) {}

  // 创建电子表格
  async create(createSheetDto: CreateSheetDto): Promise<SheetResponseDto> {
    const sheet = this.sheetRepository.create({
      ...createSheetDto,
      data: [],
    });
    
    await this.sheetRepository.save(sheet);
    
    return this.toResponseDto(sheet);
  }

  // 查找所有电子表格
  async findAll(): Promise<SheetResponseDto[]> {
    const sheets = await this.sheetRepository.find();
    return sheets.map(sheet => this.toResponseDto(sheet));
  }

  // 查找单个电子表格
  async findOne(id: string): Promise<SheetResponseDto> {
    try {
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        throw new NotFoundException(`无效的ID格式: ${id}`);
      }
      
      const sheet = await this.sheetRepository.findOne({
        where: { id: numericId },
      });
      
      if (!sheet) {
        throw new NotFoundException(`电子表格 #${id} 未找到`);
      }
      
      return this.toResponseDto(sheet);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`电子表格 #${id} 未找到或ID格式不正确`);
    }
  }

  // 更新电子表格
  async update(id: string, updateSheetDto: UpdateSheetDto): Promise<SheetResponseDto> {
    try {
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        throw new NotFoundException(`无效的ID格式: ${id}`);
      }
      
      const sheet = await this.sheetRepository.findOne({
        where: { id: numericId },
      });
      
      if (!sheet) {
        throw new NotFoundException(`电子表格 #${id} 未找到`);
      }
      
      // 更新电子表格属性
      if (updateSheetDto.name) {
        sheet.name = updateSheetDto.name;
      }
      
      if (updateSheetDto.data) {
        sheet.data = updateSheetDto.data;
      }
      
      await this.sheetRepository.save(sheet);
      
      return this.toResponseDto(sheet);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`电子表格 #${id} 未找到或ID格式不正确`);
    }
  }

  // 删除电子表格
  async remove(id: string): Promise<void> {
    try {
      const numericId = parseInt(id, 10);
      if (isNaN(numericId)) {
        throw new NotFoundException(`无效的ID格式: ${id}`);
      }
      
      const result = await this.sheetRepository.delete(numericId);
      
      if (result.affected === 0) {
        throw new NotFoundException(`电子表格 #${id} 未找到`);
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`电子表格 #${id} 未找到或ID格式不正确`);
    }
  }

  // 将实体转换为响应DTO
  private toResponseDto(sheet: Sheet): SheetResponseDto {
    return {
      id: sheet.getId(),
      name: sheet.name,
      data: sheet.data || [],
      createdAt: sheet.createdAt,
      updatedAt: sheet.updatedAt,
    };
  }
} 