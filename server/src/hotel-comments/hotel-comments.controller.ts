import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelCommentsService } from './hotel-comments.service';
import { CreateHotelCommentDto } from './dto/create-hotel-comment.dto';
import { UpdateHotelCommentDto } from './dto/update-hotel-comment.dto';

@Controller('hotel-comments')
export class HotelCommentsController {
  constructor(private readonly hotelCommentsService: HotelCommentsService) {}

  @Post()
  create(@Body() createHotelCommentDto: CreateHotelCommentDto) {
    return this.hotelCommentsService.create(createHotelCommentDto);
  }

  @Get()
  findAll() {
    return this.hotelCommentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelCommentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelCommentDto: UpdateHotelCommentDto) {
    return this.hotelCommentsService.update(+id, updateHotelCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelCommentsService.remove(+id);
  }
}
