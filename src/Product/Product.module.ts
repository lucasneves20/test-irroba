import { CategorySchema } from '../Category/Category.schema';
import { ProductSchema, Product } from './Product.schema';
import { ProductService } from './Product.service';
import { ProductsController } from './Product.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Product.name,
				schema: ProductSchema,
			},
		]),
	],
	controllers: [ProductsController],
	providers: [ProductService],
})
export class ProductModule {}
