import { Products } from './../Schema/products.schema';
import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

interface IProduct {
  name: string;
  price: number;
  sku: string;
}

@Controller('product')
export class ProductsController {
  constructor(@Inject('PRODUCT_MODEL') private productModel: Model<Products>) {}

  @Get()
  async getProduct() {
    const createProducts = new this.productModel();

    return createProducts;
  }

  @Post()
  async postProduct(@Body() data: IProduct): Promise<Products> {
    const createProducts = new this.productModel(data);

    return createProducts;
  }
}
