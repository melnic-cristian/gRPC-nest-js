import { Module } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ItemController } from './controller/item.controller';
import { ItemService } from './service/item.service';
import { join } from 'path';

@Module({
  controllers: [ItemController],
  providers: [
    ItemService,
    {
      provide: 'ADD_ITEM_CLIENT',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: 'localhost:5000',
            package: 'additemsservice',
            protoPath: join(__dirname, '_proto/add-items-service.proto'),
        },
        });
      },
    },
    {
      provide: 'RETURN_ITEMS_CLIENT',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: 'localhost:5001',
            package: 'returnitemsservice',
            protoPath: join(__dirname, '_proto/return-items-service.proto'),
        },
        });
      },
    },
  ],
})
export class ItemModule {}
