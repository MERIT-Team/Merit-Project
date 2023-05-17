import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Model } from 'mongoose';
import { Hotel } from './entities/hotel.entity';
import { HotelComment } from 'src/hotel-comments/entities/hotel-comment.entity';
import { UserRating } from 'src/user-rating/entities/user-rating.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelCardModel: Model<Hotel>,
    @InjectModel(HotelComment.name) private hotelComment: Model<HotelComment>,
    @InjectModel(UserRating.name) private userRating: Model<UserRating>,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    const hotel = await new this.hotelCardModel(createHotelDto).save();
    return hotel;
  }

  async findAll() {
    const result = await this.hotelCardModel
      .find()
      .populate(['comments', 'UserRating']);
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
