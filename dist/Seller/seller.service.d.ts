import { Repository } from "typeorm";
import { Seller } from "./seller.dto";
import { SellerEntity } from "./seller.entity";
export declare class SellerService {
    private sellerRepo;
    constructor(sellerRepo: Repository<SellerEntity>);
    getSeller(): any;
    Sellerhistory(): string;
    findSellerByname(qry: any): any;
    findAll(): any;
    register(mydto: Seller): any;
    login(Uname: any, Upassword: any): Promise<any>;
    updateProfile(id: any, name: any, email: any, password: any, address: any): any;
    updateOne(id: any, mydto: Seller): any;
    deleteUser(Uid: any): any;
}
