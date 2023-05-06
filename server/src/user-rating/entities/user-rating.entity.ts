import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class UserRating {
  @Prop({ type: String })
  Users: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'users';
  };
  @Prop({ type: String })
  hotels: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'hotels';
  };
  @Prop({ type: Number })
  userRating: number;
}
export const userRatingSchema = SchemaFactory.createForClass(UserRating);
