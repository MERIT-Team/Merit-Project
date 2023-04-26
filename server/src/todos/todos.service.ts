import { Injectable } from '@nestjs/common';

@Injectable()
export class todosService {
  todo = [
    { id: 1, name: 'Drink Water' },
    { id: 2, name: 'Water' },
  ];

  getTodos() {
    return this.todo;
  }
}
