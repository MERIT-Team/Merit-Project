import { Module } from '@nestjs/common';
import { DialCodeService } from './dial_code.service';
import { DialCodeController } from './dial_code.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DialCode, DialCodeSchema } from './entities/dial_code.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DialCode.name, schema: DialCodeSchema },
    ]),
  ],
  controllers: [DialCodeController],
  providers: [DialCodeService],
})
export class DialCodeModule {}
