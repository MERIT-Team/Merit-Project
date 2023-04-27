import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(7777);
  console.log(`App is running on:http://localhost:7777/`);
}
bootstrap();
