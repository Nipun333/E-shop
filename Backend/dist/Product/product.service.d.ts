import { SellerEntity } from "src/Seller/seller.entity";
import { Repository } from "typeorm";
import { ProductDTO } from "./product.dto";
import { ProductEntity } from "./product.entity";
export declare class ProductService {
    private sellerRepo;
    private productRepo;
    constructor(sellerRepo: Repository<SellerEntity>, productRepo: Repository<ProductEntity>);
    add(mydto: any): Promise<ProductEntity | "seller not found">;
    getAll(): any;
    searchByName(ProductName: any): Promise<any>;
    productAdd(Pname: any, price: any, quantity: any): any;
    deleteProduct(id: any): any;
    updateProduct(id: any, Productname: any, Price: any, Quantity: any, SoldQuantity: any): any;
    updateOne(id: any, mydto: ProductDTO): any;
    findbyProductname(qry: any): any;
    findbySellername(seller: any): any;
}
