import { SellerEntity } from "src/Seller/seller.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class ProductEntity{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    ProductName:string;

    @Column()
    Price:number;

    @Column()
    Description:string;

    @Column()
    Sellername:string;

    @Column()
    Quantity:number;

    @Column()
    SoldQuantity:number;

    @Column()
    filename: string;

    @ManyToOne(() => SellerEntity, (seller) => seller.product)
    seller: SellerEntity
    
}