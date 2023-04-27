import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DialCodeService } from './dial_code.service';
import { CreateDialCodeDto } from './dto/create-dial_code.dto';
import { UpdateDialCodeDto } from './dto/update-dial_code.dto';

@Controller('dial-code')
export class DialCodeController {
  constructor(private readonly dialCodeService: DialCodeService) {}

  @Post()
  create(@Body() createDialCodeDto: CreateDialCodeDto) {
    return this.dialCodeService.create(createDialCodeDto);
  }

  @Get()
  findAll() {
    return this.dialCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dialCodeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDialCodeDto: UpdateDialCodeDto,
  ) {
    return this.dialCodeService.update(+id, updateDialCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dialCodeService.remove(+id);
  }
}
