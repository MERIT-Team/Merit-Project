import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Model } from 'mongoose';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelCardModel: Model<Hotel>) {}

  async create(createHotelDto: CreateHotelDto) {
    console.log('createHotelDto', createHotelDto);
    const hotelsCard = await this.hotelCardModel.create(createHotelDto);
    return hotelsCard;
  }

  findAll() {
    return `This action returns all hotels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
