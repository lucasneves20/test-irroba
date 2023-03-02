import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CatSchema = new mongoose.Schema({
  _id: String,
  name: String,
  price: Number,
  sku: String,
});

export class Products extends Document {
  readonly _id: string;
  readonly name: string;
  readonly price: number;
  readonly sku: string;
}
