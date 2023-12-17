import { Module } from '@nestjs/common';
import { ItemController } from './controller/item.controller';
import { ItemService } from './service/item.service';

@Module({
  providers:[ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
