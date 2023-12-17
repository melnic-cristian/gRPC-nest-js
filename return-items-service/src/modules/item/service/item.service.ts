import { Injectable } from '@nestjs/common';
import { Item } from '../model/entity/item.entity';
import { ItemsResponse } from '../model/dto/items-response.dto';

@Injectable()
export class ItemService {
      
    public async getAllItems() : Promise<ItemsResponse>{
        const items = await Item.find()
        
        return {items}     
    }
      
}