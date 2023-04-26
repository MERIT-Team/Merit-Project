import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { TodoCategoriesModule } from './todo-categories/todo-categories.module';

@Module({
  imports: [TodosModule, UsersModule, TodoCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
