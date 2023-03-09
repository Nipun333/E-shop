import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class SellerEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sname: string;

  @Column()
  email: string;

  @Column()
  phn: number;

  //@Column()
  //address: string;

}