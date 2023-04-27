import { Injectable } from '@nestjs/common';
import { CreateDialCodeDto } from './dto/create-dial_code.dto';
import { UpdateDialCodeDto } from './dto/update-dial_code.dto';
import { DialCode } from './entities/dial_code.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class DialCodeService {
  constructor(
    @InjectModel(DialCode.name) private readonly dialcodeModel: Model<DialCode>,
  ) {}
  create(createDialCodeDto: CreateDialCodeDto) {
    return 'This action adds a new dialCode';
  }

  findAll() {
    return this.dialcodeModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} dialCode`;
  }

  update(id: number, updateDialCodeDto: UpdateDialCodeDto) {
    return `This action updates a #${id} dialCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} dialCode`;
  }
}
