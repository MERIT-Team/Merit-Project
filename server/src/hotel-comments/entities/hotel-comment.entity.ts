import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@Schema({ timestamps: true })
export class HotelComment {
  @Prop({ type: String })
  user_id: string;
  @Prop({ type: String })
  hotel_id: string;
  @Prop({ type: String })
  comments: string;
}
export const HotelCommentsSchema = SchemaFactory.createForClass(HotelComment);
