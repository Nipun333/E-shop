import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class CategoryEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cname: string;

  @Column()
  status: string;



}