import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello !!!';
  }

  @Get('Green')
  getGreen(): string {
    return '<h1><i>Hello</i></h1>';
  }
}
