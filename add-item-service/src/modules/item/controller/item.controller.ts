import { ItemService } from './../service/item.service';
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { AddItemDTO } from "../model/dto/add-item.dto";
import { Item } from "../model/entity/item.entity";

@Controller()
export class ItemController {

  public constructor(private readonly itemService: ItemService){}

  @GrpcMethod('AddItemService', 'AddItem')
  public async addItem(itemData: AddItemDTO) : Promise<Item> {
   return await this.itemService.addNewItem(itemData);
  }
}