import { IsString, IsOptional, IsBoolean, IsDate, IsNotEmpty, IsJSON } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * 电子表格基础DTO
 * 包含电子表格的通用属性
 */
export class SheetDto {
  @ApiProperty({ description: '电子表格ID' })
  id: string;

  @ApiProperty({ description: '电子表格标题' })
  title: string;

  @ApiPropertyOptional({ description: '电子表格描述' })
  description?: string;

  @ApiProperty({ description: '电子表格内容（JSON格式）' })
  content: string;

  @ApiPropertyOptional({ description: '缩略图URL' })
  thumbnail?: string;

  @ApiProperty({ description: '是否公开访问' })
  isPublic: boolean;

  @ApiProperty({ description: '创建时间' })
  createdAt: Date;

  @ApiProperty({ description: '更新时间' })
  updatedAt: Date;
}

/**
 * 创建电子表格DTO
 * 用于创建新的电子表格
 */
export class CreateSheetDto {
  @ApiProperty({ description: '电子表格标题' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ description: '电子表格描述' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: '电子表格内容（JSON格式）' })
  @IsJSON()
  @IsNotEmpty()
  content: string;

  @ApiPropertyOptional({ description: '缩略图URL' })
  @IsString()
  @IsOptional()
  thumbnail?: string;

  @ApiPropertyOptional({ description: '是否公开访问', default: false })
  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}

/**
 * 更新电子表格DTO
 * 用于更新现有电子表格
 */
export class UpdateSheetDto {
  @ApiPropertyOptional({ description: '电子表格标题' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ description: '电子表格描述' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ description: '电子表格内容（JSON格式）' })
  @IsJSON()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({ description: '缩略图URL' })
  @IsString()
  @IsOptional()
  thumbnail?: string;

  @ApiPropertyOptional({ description: '是否公开访问' })
  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}

/**
 * 查询电子表格参数DTO
 * 用于过滤电子表格列表
 */
export class QuerySheetParamsDto {
  @ApiPropertyOptional({ description: '按标题搜索' })
  @IsString()
  @IsOptional()
  searchTerm?: string;

  @ApiPropertyOptional({ description: '是否只显示公开的表格', default: false })
  @IsBoolean()
  @IsOptional()
  publicOnly?: boolean;

  @ApiPropertyOptional({ description: '按创建时间排序方向', enum: ['ASC', 'DESC'], default: 'DESC' })
  @IsString()
  @IsOptional()
  sortOrder?: 'ASC' | 'DESC';
} 