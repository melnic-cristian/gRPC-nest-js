import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';
import { ItemModule } from '../item/item.module';

@Module({
  imports: [
    DatabaseModule,
    ItemModule]
})
export class AppModule {}
