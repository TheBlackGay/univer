import { IsString, IsOptional, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Cell } from '../entities/sheet.entity';

// 创建电子表格DTO
export class CreateSheetDto {
  @ApiProperty({ description: '电子表格名称', example: '销售报表' })
  @IsString()
  name: string;
}

// 单元格DTO
export class CellDto implements Cell {
  @ApiProperty({ description: '行索引', example: 0 })
  @IsNumber()
  row: number;

  @ApiProperty({ description: '列索引', example: 0 })
  @IsNumber()
  col: number;

  @ApiProperty({ description: '单元格值', example: '数据' })
  value: string | number;
}

// 更新电子表格DTO
export class UpdateSheetDto {
  @ApiProperty({ description: '电子表格名称', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: '电子表格数据', type: [CellDto], required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CellDto)
  @IsOptional()
  data?: Cell[];
}

// 电子表格响应DTO
export class SheetResponseDto {
  @ApiProperty({ description: '电子表格ID' })
  id: string;

  @ApiProperty({ description: '电子表格名称' })
  name: string;

  @ApiProperty({ description: '电子表格数据', type: [CellDto] })
  data: Cell[];

  @ApiProperty({ description: '创建时间' })
  createdAt: Date;

  @ApiProperty({ description: '更新时间' })
  updatedAt: Date;
} 