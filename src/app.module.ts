import { CategorySchema } from './Category/Category.schema';
import { ProductSchema } from './Product/Product.schema';
import { CategoryModule } from './Category/Category.module';
import { ProductModule } from './Product/Product.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
	imports: [
		ProductModule,
		CategoryModule,
		MongooseModule.forRoot(process.env.MONGODB_CONNECTION),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
