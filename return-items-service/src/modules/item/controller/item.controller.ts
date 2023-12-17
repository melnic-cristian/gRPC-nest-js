import { ItemService } from './../service/item.service';
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { Empty } from '../model/dto/empty.dto';
import { ItemsResponse } from '../model/dto/items-response.dto';

@Controller()
export class ItemController {

  public constructor(private readonly itemService: ItemService){}

  @GrpcMethod('ReturnItemsService', 'GetItems')
  public async getItems(arg:Empty) : Promise<ItemsResponse> {
    const items = await this.itemService.getAllItems();

    return items;
  }

}