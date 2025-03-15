import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('sheets')
export class SheetController {
  @Get()
  findAll() {
    return { message: '获取所有电子表格' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `获取ID为${id}的电子表格` };
  }

  @Post()
  create(@Body() createSheetDto: any) {
    return { message: '创建新的电子表格', data: createSheetDto };
  }
}
