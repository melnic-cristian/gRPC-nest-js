import { Injectable } from '@nestjs/common';
import { AddItemDTO } from '../model/dto/add-item.dto';
import { Item } from '../model/entity/item.entity';

@Injectable()
export class ItemService {
      
    public async addNewItem(itemData: AddItemDTO) : Promise<Item>{
        const item = new Item();
        item.name = itemData.name;
        item.price = itemData.price;
        
        await item.save();
  
        return item; 
    }
      
}