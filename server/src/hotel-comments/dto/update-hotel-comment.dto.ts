import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelCommentDto } from './create-hotel-comment.dto';

export class UpdateHotelCommentDto extends PartialType(CreateHotelCommentDto) {}
