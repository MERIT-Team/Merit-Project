import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true })
export class User {
  @Prop({ type: String })
  FavHotelId: string;
  @Prop({ type: Number })
  phoneNumber: number;
  @Prop({ type: String })
  Email: string;
}
