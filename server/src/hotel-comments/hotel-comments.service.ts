import { Injectable } from '@nestjs/common';
import { CreateHotelCommentDto } from './dto/create-hotel-comment.dto';
import { UpdateHotelCommentDto } from './dto/update-hotel-comment.dto';

@Injectable()
export class HotelCommentsService {
  create(createHotelCommentDto: CreateHotelCommentDto) {
    return 'This action adds a new hotelComment';
  }

  findAll() {
    return `This action returns all hotelComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotelComment`;
  }

  update(id: number, updateHotelCommentDto: UpdateHotelCommentDto) {
    return `This action updates a #${id} hotelComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotelComment`;
  }
}
