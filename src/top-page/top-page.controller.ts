import { FindTopPageDto } from './dto/find-top-page.dto';
import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Delete,
  Patch,
  HttpCode,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService);

  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {
    this.configService.get('TEST');
  }

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  // @Get(':id')
  // async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dtoL: FindTopPageDto) {}
}
