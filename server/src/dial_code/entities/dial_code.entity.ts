import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'Country_codes' })
export class DialCode {
  @Prop([String])
  name: string;

  @Prop({ required: true })
  dial_code: string;

  @Prop([String])
  code: string;
}

export const DialCodeSchema = SchemaFactory.createForClass(DialCode);
