import { Category } from './../Category/Category.schema';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

@Schema()
export class Product extends Document {
	// @IsNumber()
	@Prop({ type: Number, required: true })
	product_id: number;

	@IsNotEmpty({ message: 'O nome não pode estar vazio' })
	@Type(() => String)
	@Prop({
		type: String,
		required: true,
		validate: [String, 'O nome deve ser string'],
	})
	name: string;

	// @IsNumber()
	// @IsNotEmpty({ message: 'O preço não pode estar vazio' })
	@Prop({ type: Number, required: true })
	price: number;

	// @IsString({ message: 'O sku deve ser uma string' })
	// @IsNotEmpty({ message: 'O sku não pode estar vazio' })
	@Prop({ type: String, required: true })
	sku: string;

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId }],
		ref: 'Category',
		isRequired: false,
	})
	product_to_category: mongoose.Schema.Types.ObjectId | Category[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
