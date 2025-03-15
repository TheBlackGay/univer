import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Response } from 'express';
import { SheetService } from '../services/sheet.service';
import { CreateSheetDto, UpdateSheetDto, SheetResponseDto } from '../dto/sheet.dto';
import * as XLSX from 'xlsx';

@ApiTags('sheets')
@Controller('sheets')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Post()
  @ApiOperation({ summary: '创建新电子表格' })
  @ApiBody({ type: CreateSheetDto })
  @ApiResponse({ status: 201, description: '创建成功', type: SheetResponseDto })
  async create(@Body() createSheetDto: CreateSheetDto): Promise<SheetResponseDto> {
    return this.sheetService.create(createSheetDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有电子表格' })
  @ApiResponse({ status: 200, description: '查询成功', type: [SheetResponseDto] })
  async findAll(): Promise<SheetResponseDto[]> {
    return this.sheetService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取单个电子表格' })
  @ApiParam({ name: 'id', description: '电子表格ID' })
  @ApiResponse({ status: 200, description: '查询成功', type: SheetResponseDto })
  @ApiResponse({ status: 404, description: '电子表格未找到' })
  async findOne(@Param('id') id: string): Promise<SheetResponseDto> {
    return this.sheetService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新电子表格' })
  @ApiParam({ name: 'id', description: '电子表格ID' })
  @ApiBody({ type: UpdateSheetDto })
  @ApiResponse({ status: 200, description: '更新成功', type: SheetResponseDto })
  @ApiResponse({ status: 404, description: '电子表格未找到' })
  async update(
    @Param('id') id: string,
    @Body() updateSheetDto: UpdateSheetDto,
  ): Promise<SheetResponseDto> {
    console.log(`接收到更新请求，ID: ${id}，数据:`, JSON.stringify(updateSheetDto));
    try {
      const result = await this.sheetService.update(id, updateSheetDto);
      return result;
    } catch (error) {
      console.error(`更新失败，ID: ${id}，错误:`, error);
      throw error;
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除电子表格' })
  @ApiParam({ name: 'id', description: '电子表格ID' })
  @ApiResponse({ status: 204, description: '删除成功' })
  @ApiResponse({ status: 404, description: '电子表格未找到' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.sheetService.remove(id);
  }

  @Get(':id/export')
  @ApiOperation({ summary: '导出电子表格为Excel文件' })
  @ApiParam({ name: 'id', description: '电子表格ID' })
  @ApiResponse({ status: 200, description: '导出成功' })
  @ApiResponse({ status: 404, description: '电子表格未找到' })
  async export(@Param('id') id: string, @Res() res: Response): Promise<void> {
    // 获取电子表格数据
    const sheet = await this.sheetService.findOne(id);
    
    // 创建工作簿
    const workbook = XLSX.utils.book_new();
    
    // 将数据转换为适合Excel的格式
    const data: any[][] = [];
    
    // 如果没有数据，创建一个空的表格
    if (!sheet.data || sheet.data.length === 0) {
      // 创建一个只有标题行的空表格
      data.push(['空数据']); 
    } else {
      // 确定表格的行数和列数
      const maxRow = Math.max(...sheet.data.map(cell => cell.row)) + 1;
      const maxCol = Math.max(...sheet.data.map(cell => cell.col)) + 1;
      
      // 初始化二维数组
      for (let i = 0; i < maxRow; i++) {
        data.push(Array(maxCol).fill(''));
      }
      
      // 填充数据
      sheet.data.forEach(cell => {
        if (data[cell.row]) {
          data[cell.row][cell.col] = cell.value;
        }
      });
    }
    
    // 创建工作表
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    
    // 将工作表添加到工作簿
    XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name || 'Sheet1');
    
    // 生成二进制数据
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    
    // 设置响应头
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(sheet.name || 'spreadsheet')}.xlsx`);
    res.setHeader('Content-Length', excelBuffer.length);
    
    // 发送文件
    res.status(HttpStatus.OK).send(excelBuffer);
  }
} 