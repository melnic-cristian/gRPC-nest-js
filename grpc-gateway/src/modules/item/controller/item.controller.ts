import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from '../service/item.service';
import { AddItemDTO } from '../model/dto/add-item.dto';
import { ItemDTO } from '../model/dto/item.dto';
import { ItemsResponseDTO } from '../model/dto/items-response.dto';

@Controller('items')
export class ItemController {
 
  public constructor(private readonly itemService: ItemService) {}

  @Post()
  public async addItem(@Body() itemData: AddItemDTO) : Promise<ItemDTO> {
    return this.itemService.addItem(itemData);
  }

  @Get()
  public async getAllItems() : Promise<ItemsResponseDTO> {
    return this.itemService.getItems();
  }
}