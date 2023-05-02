import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { DialCodeModule } from './dial_code/dial_code.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

dotenv.config();
console.log(process.env.MONGO_URL);
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), DialCodeModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
