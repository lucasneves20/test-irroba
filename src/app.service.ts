// import { Category } from './Category/Category.schema';
// import { Product } from './Product/Product.schema';
// import { InjectModel } from '@nestjs/mongoose';
import { Injectable /*, OnApplicationBootstrap */ } from '@nestjs/common';
// import { Model } from 'mongoose';
// import axios from 'axios';

@Injectable()
export class AppService /*implements OnApplicationBootstrap */ {
	// constructor(
	// 	@InjectModel('Product') private readonly productModel: Model<Product>,
	// 	@InjectModel('Category')
	// 	private readonly categoryModel: Model<Category>,
	// ) {}
	// -------- Tentativa fracassada de fazer uma conexão automatizada com o banco de dados irroba para puxar informação
	// async categorySimplify(product: any) {
	// 	const realCategory = product.data.data[0].product_to_category as any[];
	// 	const category = realCategory.map(async (value) => {
	// 		if (await this.categoryModel.findOne({ name: value.name })) return;
	// 		return await new this.categoryModel(value);
	// 	});
	// 	return category;
	// }
	// async productSimplify(product: any) {
	// 	const realProduct = product.data.data[0];
	// 	const productDescription = product.data.data[0].product_description[0];
	// 	const productSimplify = {
	// 		products_id: realProduct.product_id,
	// 		name: productDescription.name,
	// 		price: realProduct.price,
	// 		sku: realProduct.sku,
	// 	};
	// 	console.log(productSimplify);
	// 	await this.categorySimplify(product);
	// 	if (await this.productModel.findOne({ name: productSimplify.name }))
	// 		return;
	// 	const productSchematize = await new this.productModel(productSimplify);
	// 	return productSchematize;
	// }
	// async onApplicationBootstrap() {
	// 	const token = await axios
	// 		.post('https://api.irroba.com.br/v1/getToken', {
	// 			username: 'integree_testedev',
	// 			password: 'jPy2jEbSSK43jz0E7wTlqOC1tCFQNHM7puNqJ5R',
	// 		})
	// 		.then((value) => value.data.data.authorization);
	// 	await axios
	// 		.get('https://api.irroba.com.br/v1/product/4569', {
	// 			headers: { Authorization: `${token}` },
	// 		})
	// 		.then((product) => this.productSimplify(product));
	// 	await axios
	// 		.get('https://api.irroba.com.br/v1/product/4559', {
	// 			headers: { Authorization: `${token}` },
	// 		})
	// 		.then((value) => this.productSimplify(value));
	// 	await axios
	// 		.get('https://api.irroba.com.br/v1/product/4552', {
	// 			headers: { Authorization: `${token}` },
	// 		})
	// 		.then((value) => this.productSimplify(value));
	// }
}
