/// <reference types="multer" />
import { Seller } from "./seller.dto";
import { SellerService } from "./seller.service";
export declare class SellerController {
    private sellerService;
    constructor(sellerService: SellerService);
    getSeller(session: any): string;
    Sellerhistory(session: any): string;
    findSellerByname(qry: any): any;
    findAll(): any;
    register(mydto: Seller, image: Express.Multer.File): Promise<any>;
    login(session: any, email: string, password: string): any;
    updateProfile(id: number, name: string, email: string, password: string, address: string): any;
    updateAddress(id: number, mydto: Seller): string;
    deleteUser(Uid: number): any;
    sendEmail(mydata: any): Promise<SentMessageInfo>;
    signout(session: any): string;
}
