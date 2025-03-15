import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sheet } from '../models/sheet.entity';
import { SheetDto, CreateSheetDto, UpdateSheetDto } from '../dto/sheet.dto';

/**
 * 电子表格服务
 * 处理与电子表格相关的业务逻辑
 */
@Injectable()
export class SheetService {
  constructor(
    @InjectRepository(Sheet)
    private sheetRepository: Repository<Sheet>,
  ) {}

  /**
   * 获取用户的所有电子表格
   * @param userId 用户ID
   * @returns 电子表格列表
   */
  async findAllByUser(userId: string): Promise<SheetDto[]> {
    const sheets = await this.sheetRepository.find({
      where: { userId, isDeleted: false },
      order: { updatedAt: 'DESC' },
    });

    return sheets.map(sheet => this.mapToDto(sheet));
  }

  /**
   * 获取单个电子表格
   * @param id 电子表格ID
   * @returns 电子表格详情
   */
  async findOne(id: string): Promise<SheetDto> {
    const sheet = await this.sheetRepository.findOneOrFail({
      where: { id, isDeleted: false },
    });

    return this.mapToDto(sheet);
  }

  /**
   * 创建新电子表格
   * @param userId 用户ID
   * @param createSheetDto 创建电子表格数据
   * @returns 创建的电子表格
   */
  async create(userId: string, createSheetDto: CreateSheetDto): Promise<SheetDto> {
    const sheet = this.sheetRepository.create({
      ...createSheetDto,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false,
    });

    const savedSheet = await this.sheetRepository.save(sheet);
    return this.mapToDto(savedSheet);
  }

  /**
   * 更新电子表格
   * @param id 电子表格ID
   * @param userId 用户ID（用于权限验证）
   * @param updateSheetDto 更新数据
   * @returns 更新后的电子表格
   */
  async update(id: string, userId: string, updateSheetDto: UpdateSheetDto): Promise<SheetDto> {
    // 确保电子表格存在且属于该用户
    await this.sheetRepository.findOneOrFail({
      where: { id, userId, isDeleted: false },
    });

    await this.sheetRepository.update(id, {
      ...updateSheetDto,
      updatedAt: new Date(),
    });

    const updatedSheet = await this.sheetRepository.findOneOrFail({
      where: { id },
    });

    return this.mapToDto(updatedSheet);
  }

  /**
   * 删除电子表格（软删除）
   * @param id 电子表格ID
   * @param userId 用户ID（用于权限验证）
   */
  async delete(id: string, userId: string): Promise<void> {
    // 确保电子表格存在且属于该用户
    await this.sheetRepository.findOneOrFail({
      where: { id, userId, isDeleted: false },
    });

    await this.sheetRepository.update(id, {
      isDeleted: true,
      updatedAt: new Date(),
    });
  }

  /**
   * 恢复删除的电子表格
   * @param id 电子表格ID
   * @param userId 用户ID（用于权限验证）
   * @returns 恢复的电子表格
   */
  async restore(id: string, userId: string): Promise<SheetDto> {
    // 确保电子表格存在且属于该用户
    await this.sheetRepository.findOneOrFail({
      where: { id, userId, isDeleted: true },
    });

    await this.sheetRepository.update(id, {
      isDeleted: false,
      updatedAt: new Date(),
    });

    const restoredSheet = await this.sheetRepository.findOneOrFail({
      where: { id },
    });

    return this.mapToDto(restoredSheet);
  }

  /**
   * 将实体映射为DTO
   * @param sheet 电子表格实体
   * @returns 电子表格DTO
   */
  private mapToDto(sheet: Sheet): SheetDto {
    return {
      id: sheet.id,
      title: sheet.title,
      description: sheet.description,
      content: sheet.content,
      thumbnail: sheet.thumbnail,
      isPublic: sheet.isPublic,
      createdAt: sheet.createdAt,
      updatedAt: sheet.updatedAt,
    };
  }
} 