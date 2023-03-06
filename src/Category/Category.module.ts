import { CategorySchema } from './Category.schema';
import { Module } from '@nestjs/common';
import { CategoryService } from './Category.service';
import { CategoryController } from './Category.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Category',
				schema: CategorySchema,
			},
		]),
	],
	providers: [CategoryService],
	controllers: [CategoryController],
})
export class CategoryModule {}
