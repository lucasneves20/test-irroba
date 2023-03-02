import { DatabaseModule } from './Devices/database.module';
import { Module } from '@nestjs/common';
import { ProductsController } from './Entities/products.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [],
})
export class AppModule {}
