import { Controller, Get, Post, Put, Delete, Param, Body, Query, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SheetService } from '../services/sheet.service';
import { SheetDto, CreateSheetDto, UpdateSheetDto, QuerySheetParamsDto } from '../dto/sheet.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    id: string;
    email: string;
  };
}

@ApiTags('电子表格')
@Controller('sheets')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @ApiOperation({ summary: '获取所有电子表格' })
  @ApiResponse({ status: 200, description: '返回电子表格列表', type: [SheetDto] })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: RequestWithUser, @Query() query: QuerySheetParamsDto): Promise<SheetDto[]> {
    return this.sheetService.findAllByUser(req.user.id);
  }

  @ApiOperation({ summary: '获取单个电子表格' })
  @ApiResponse({ status: 200, description: '返回电子表格', type: SheetDto })
  @ApiResponse({ status: 404, description: '电子表格不存在' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SheetDto> {
    return this.sheetService.findOne(id);
  }

  @ApiOperation({ summary: '创建电子表格' })
  @ApiResponse({ status: 201, description: '创建成功', type: SheetDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req: RequestWithUser, @Body() createSheetDto: CreateSheetDto): Promise<SheetDto> {
    return this.sheetService.create(req.user.id, createSheetDto);
  }

  @ApiOperation({ summary: '更新电子表格' })
  @ApiResponse({ status: 200, description: '更新成功', type: SheetDto })
  @ApiResponse({ status: 404, description: '电子表格不存在' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Body() updateSheetDto: UpdateSheetDto,
  ): Promise<SheetDto> {
    return this.sheetService.update(id, req.user.id, updateSheetDto);
  }

  @ApiOperation({ summary: '删除电子表格' })
  @ApiResponse({ status: 204, description: '删除成功' })
  @ApiResponse({ status: 404, description: '电子表格不存在' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string, @Req() req: RequestWithUser): Promise<void> {
    return this.sheetService.delete(id, req.user.id);
  }

  @ApiOperation({ summary: '恢复已删除的电子表格' })
  @ApiResponse({ status: 200, description: '恢复成功', type: SheetDto })
  @ApiResponse({ status: 404, description: '电子表格不存在' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id/restore')
  async restore(@Param('id') id: string, @Req() req: RequestWithUser): Promise<SheetDto> {
    return this.sheetService.restore(id, req.user.id);
  }
} 