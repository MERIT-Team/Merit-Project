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

  async findAll() {
    const result = await this.hotelCardModel.find();
    return result;
  }

  async findOne(id: string) {
    const result = await this.hotelCardModel.findById(id);
    return result;
  }

  async update(id: string, updateHotelDto: UpdateHotelDto) {
    const updatedHotel = await this.hotelCardModel.findOneAndUpdate(
      { _idHotel: id },
      updateHotelDto,
    );
    return updatedHotel;
  }

  async remove(id: string) {
    const result = await this.hotelCardModel.findByIdAndDelete(id);
    return result;
  }
}
