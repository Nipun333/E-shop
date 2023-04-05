import { SellerEntity } from "src/Seller/seller.entity";
export declare class ProductEntity {
    Id: number;
    ProductName: string;
    Price: number;
    Description: string;
    Sellername: string;
    Quantity: number;
    SoldQuantity: number;
    filename: string;
    seller: SellerEntity;
}
