import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Hotel {
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

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  UserRating: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  images: string;

  @Prop({ type: Object })
  thingsToKnow: {
    houseRules: string[];
  };

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  comments: mongoose.Schema.Types.ObjectId;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
