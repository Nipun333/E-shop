import { ProductEntity } from "src/Product/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("seller")
export class SellerEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  filename: string;

  @OneToMany(() => ProductEntity, (product) => product.seller)
  product: ProductEntity[]

}