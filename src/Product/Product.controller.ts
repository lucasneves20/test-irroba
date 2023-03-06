import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ProductService } from './Product.service';
import { Product } from './Product.schema';

@Controller('product')
export class ProductsController {
	constructor(private productService: ProductService) {}

	@Get()
	getAllProducts() {
		return this.productService.showAll();
	}

	@Get(':id')
	getProductById(@Param() params) {
		return this.productService.showByProductId(params.id) as any;
	}

	@Post()
	async create(@Body() product: Product) {
		return this.productService.createProduct(product);
	}

	@Put(':id')
	update(@Param() params, @Body() product: Product) {
		return this.productService.updateProduct(params.id, product) as any;
	}

	@Delete(':id')
	remove(@Param() params) {
		return this.productService.destroyProduct(params.id);
	}
}
