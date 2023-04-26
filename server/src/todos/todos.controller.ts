import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { todosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: todosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  //   @Post()
  //   createTodo(@Body() todo: any) {
  //     const length = this.todo.push(todo);
  //     return this.todo[length - 1];
  //   }

  //   @Get('/:id')
  //   getTodoById(@Param('id') id: number) {
  //     console.log(typeof id);
  //     const result = this.todo.find((todo) => todo.id === Number(id));
  //     console.log(result);
  //     return result;
  //   }
}
