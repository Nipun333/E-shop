/// <reference types="multer" />
import { ProductDTO } from "./product.dto";
import { ProductService } from "./product.service";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    Addproduct(mydto: ProductDTO, file: Express.Multer.File): Promise<import("./product.entity").ProductEntity | "seller not found">;
    getAll(): any;
    searchByName(ProductName: string): Promise<any>;
    productAdd(Pname: string, price: number, quantity: number): any;
    deleteModeratorById(id: number): any;
    updateProduct(id: number, Productname: string, Price: number, Quantity: number, SoldQuantity: number): any;
    updateAddress(id: number, mydto: ProductDTO): string;
    findbyProductname(qry: any): any;
    findbySellername(seller: string): any;
    signout(session: any): {
        message: string;
    };
}
