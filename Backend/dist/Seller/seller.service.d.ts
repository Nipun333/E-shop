import { Repository } from "typeorm";
import { Seller } from "./seller.dto";
import { SellerEntity } from "./seller.entity";
import { MailerService } from "@nestjs-modules/mailer/dist";
export declare class SellerService {
    private sellerRepo;
    private mailerService;
    constructor(sellerRepo: Repository<SellerEntity>, mailerService: MailerService);
    Sellerhistory(session: any): string;
    findSellerByname(qry: any): any;
    findAll(): any;
    register(mydto: any): Promise<any>;
    login(email: any, password: any): Promise<any>;
    updateProfile(id: any, name: any, email: any, password: any, address: any): any;
    updateOne(id: any, mydto: Seller): any;
    deleteUser(Uid: any): any;
    sendEmail(mydata: any): Promise<SentMessageInfo>;
}
