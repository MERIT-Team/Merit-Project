import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoCategoriesService } from './todo-categories.service';
import { CreateTodoCategoryDto } from './dto/create-todo-category.dto';
import { UpdateTodoCategoryDto } from './dto/update-todo-category.dto';

@Controller('todo-categories')
export class TodoCategoriesController {
  constructor(private readonly todoCategoriesService: TodoCategoriesService) {}

  @Post()
  create(@Body() createTodoCategoryDto: CreateTodoCategoryDto) {
    return this.todoCategoriesService.create(createTodoCategoryDto);
  }

  @Get()
  findAll() {
    return this.todoCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoCategoryDto: UpdateTodoCategoryDto,
  ) {
    return this.todoCategoriesService.update(+id, updateTodoCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoCategoriesService.remove(+id);
  }
}
