import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), HotelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
