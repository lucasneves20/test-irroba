import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './Product.schema';
import { Model } from 'mongoose';

interface IErrorReturn {
	message: string;
	notFound: boolean;
}

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product.name)
		private readonly productModel: Model<Product>,
	) {}

	async showAll(): Promise<Product[]> {
		const product = await this.productModel
			.find()
			.populate('product_to_category', 'category_id name')
			.exec();

		return product;
	}

	async showByProductId(id: number): Promise<Product | IErrorReturn> {
		const product = await this.productModel
			.findOne({ product_id: id })
			.populate('product_to_category', 'name category_id')
			.exec();

		if (!product)
			return { message: 'Produto não encontrado', notFound: true };

		return product;
	}

	async createProduct(product: Product): Promise<Product> {
		const productDatabase = new this.productModel(product);

		return productDatabase.save();
	}

	async updateProduct(
		productId: number,
		product: Product,
	): Promise<Product | IErrorReturn> {
		await this.productModel.updateOne({ product_id: productId }, product);

		return await this.showByProductId(productId);
	}

	async destroyProduct(productId: number): Promise<Product> {
		return await this.productModel.findOneAndDelete({
			product_id: productId,
		});
	}
}
