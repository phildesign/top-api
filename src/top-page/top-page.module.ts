import { TopPageModel } from './top-page.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TopPageController } from './top-page.controller';

@Module({
  controllers: [TopPageController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TopPageModel,
        schemaOptions: 'TopPage',
      },
    ]),
  ],
})
export class TopPageModule {}
