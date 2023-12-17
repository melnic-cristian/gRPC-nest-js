import { ItemsResponseDTO } from '../dto/items-response.dto';

export interface IReturnItemsService {
  getItems(arg: number): Promise<ItemsResponseDTO>;
}
