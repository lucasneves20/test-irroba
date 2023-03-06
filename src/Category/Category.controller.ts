import {
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { Category } from './Category.schema';
import { CategoryService } from './Category.service';

@Controller('category')
export class CategoryController {
	constructor(private categoryService: CategoryService) {}

	@Get()
	getAllCategorys(): Promise<Category[]> {
		return this.categoryService.showAllCategorys();
	}

	@Get(':id')
	getCategoryById(@Param() params): Promise<Category> {
		return this.categoryService.showCategorysById(params.id) as any;
	}

	@Post()
	create(@Body() category: Category): Promise<Category> {
		return this.categoryService.createCategory(category);
	}

	@Put(':id')
	update(@Param() params, @Body() category: Category): Promise<Category> {
		return this.categoryService.updateCategory(params.id, category) as any;
	}

	@Delete(':id')
	remove(@Param() params): Promise<Category> {
		return this.categoryService.destroyCategory(params.id);
	}
}
