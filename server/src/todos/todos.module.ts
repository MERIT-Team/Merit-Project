import { Module } from '@nestjs/common';
import { todosService } from './todos.service';
import { TodosController } from './todos.controller';

@Module({
  providers: [todosService],
  controllers: [TodosController],
})
export class TodosModule {}
