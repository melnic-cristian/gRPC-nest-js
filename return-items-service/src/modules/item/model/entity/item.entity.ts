import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'; 
 
@Entity('items') 
export class Item extends BaseEntity { 
  @PrimaryGeneratedColumn() 
  id: number; 
 
  @Column() 
  name: string;
 
  @Column() 
  price: number;
}