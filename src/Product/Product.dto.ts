import mongoose from 'mongoose';
import { Category } from '../Category/Category.schema';

export class IProductValidator {
	product_id: number;
	name: string;
	price: number;
	sku: string;
	product_to_category: mongoose.Schema.Types.ObjectId | Category[];
}

// export function IProductValidatorFunc(product: IProductValidator) {
// 	switch(product) {
// 		case typeof product.name == string:
// 	}
// }
