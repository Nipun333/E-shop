import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("seller")
export class SellerEntity{

  @PrimaryColumn()
  id:number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

}