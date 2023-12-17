import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class AddItemDTO {
   @IsNotEmpty()
   @IsString()
   name: string;
 
   @IsNotEmpty()
   @IsNumber()
   @Min(1)
   price: number;
 }