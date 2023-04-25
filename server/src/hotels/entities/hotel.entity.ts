import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema({ timestamps: true })
export class Hotel {
  @Prop({ default: () => nanoid(), type: String })
  _idHotel: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, default: false })
  wifi: boolean;

  @Prop({ type: String, default: false })
  parking: boolean;

  @Prop({ type: Object })
  location: {
    address: string; //aimag duureg
    coordinates: number[]; //urtrag urgurug 2 orno
  };

  @Prop({ type: Number })
  userRating: number;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ type: Object })
  thingsToKnow: {
    houseRules: string[];
  };

  @Prop({ type: String })
  comments: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
