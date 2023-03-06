import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './Category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
	constructor(
		@InjectModel('Category')
		private readonly CategoryModel: Model<Category>,
	) {}

	async showAllCategorys(): Promise<Category[]> {
		// Retorna um array de categorias
		const category = this.CategoryModel.find().exec();

		return category;
	}

	async showCategorysById(id: number): Promise<Category> {
		return this.CategoryModel.findOne({ category_id: id }).exec();
	}

	async createCategory(category: Category): Promise<Category> {
		const categoryDatabase = new this.CategoryModel(category);

		return categoryDatabase.save();
	}

	async updateCategory(id: string, category: Category): Promise<Category> {
		await this.CategoryModel.findOneAndUpdate(
			{ category_id: id },
			category,
		);

		return await this.showCategorysById(category.category_id);
	}

	async destroyCategory(id: string) {
		// Deleta uma categoria específica
		return await this.CategoryModel.findOneAndDelete({
			category_id: id,
		});
	}
}
