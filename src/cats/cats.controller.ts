import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    return 'all cat';
  }

  @Get(':id')
  getCat() {
    return 'cat';
  }

  @Post(':id')
  addCat() {
    return 'add';
  }

  @Put(':id')
  updateCat() {
    return 'put cat';
  }

  @Patch()
  updatePartialCat() {
    return 'partial';
  }

  @Delete()
  deleteCat() {
    return 'delete';
  }
}
