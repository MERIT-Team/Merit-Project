import { Module } from '@nestjs/common';
import { TodoCategoriesService } from './todo-categories.service';
import { TodoCategoriesController } from './todo-categories.controller';

@Module({
  controllers: [TodoCategoriesController],
  providers: [TodoCategoriesService],
})
export class TodoCategoriesModule {}
