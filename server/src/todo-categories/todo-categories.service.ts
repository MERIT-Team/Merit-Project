import { Injectable } from '@nestjs/common';
import { CreateTodoCategoryDto } from './dto/create-todo-category.dto';
import { UpdateTodoCategoryDto } from './dto/update-todo-category.dto';

@Injectable()
export class TodoCategoriesService {
  create(createTodoCategoryDto: CreateTodoCategoryDto) {
    return 'This action adds a new todoCategory';
  }

  findAll() {
    return `This action returns all todoCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todoCategory`;
  }

  update(id: number, updateTodoCategoryDto: UpdateTodoCategoryDto) {
    return `This action updates a #${id} todoCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoCategory`;
  }
}
