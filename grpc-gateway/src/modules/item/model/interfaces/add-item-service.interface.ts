import { AddItemDTO } from '../dto/add-item.dto';
import { ItemDTO } from '../dto/item.dto';

export interface IAddItemService {
   addItem(data: AddItemDTO): Promise<ItemDTO>;
}
