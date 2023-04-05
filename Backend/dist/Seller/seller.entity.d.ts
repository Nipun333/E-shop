import { ProductEntity } from "src/Product/product.entity";
export declare class SellerEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    filename: string;
    product: ProductEntity[];
}
