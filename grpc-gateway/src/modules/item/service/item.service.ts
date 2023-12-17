import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { AddItemDTO } from '../model/dto/add-item.dto';
import { IAddItemService } from '../model/interfaces/add-item-service.interface';
import { ItemDTO } from '../model/dto/item.dto';
import { IReturnItemsService } from '../model/interfaces/return-items-service.interface';
import { ItemsResponseDTO } from '../model/dto/items-response.dto';

@Injectable()
export class ItemService {

    constructor(
        @Inject('ADD_ITEM_CLIENT') private readonly addItemClient: ClientGrpcProxy,
        @Inject('RETURN_ITEMS_CLIENT') private readonly returnItemsClient: ClientGrpcProxy
      ) {}

      public async addItem(itemData: AddItemDTO) : Promise<ItemDTO> {
        try {
          const addItemService = this.addItemClient.getService<IAddItemService>('AddItemService');
          const item = await addItemService.addItem(itemData);
        
          return item;
        } catch (error) {

          throw new Error('Error adding item');
        }
      }

      public async getItems(): Promise<ItemsResponseDTO> {
        try {
          const returnItemsService = this.returnItemsClient.getService<IReturnItemsService>('ReturnItemsService');
          const items = await returnItemsService.getItems(0);

          return items;
        } catch (error) {

          throw new Error('Error returning items');
        }
      }
    
        
}