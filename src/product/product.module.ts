import { ProductModel } from './product.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: 'Product',
      },
    ]),
  ],
})
export class ProductModule {}
