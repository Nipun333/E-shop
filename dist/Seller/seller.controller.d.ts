import { Seller } from "./seller.dto";
import { SellerService } from "./seller.service";
export declare class SellerController {
    private sellerService;
    constructor(sellerService: SellerService);
    getSeller(): string;
    Sellerhistory(): string;
    findSellerByname(qry: any): any;
    findAll(): any;
    register(mydto: Seller): any;
    login(name: string, password: string): any;
    updateProfile(id: number, name: string, email: string, password: string, address: string): any;
    updateAddress(id: number, mydto: Seller): string;
    deleteUser(Uid: number): any;
}
