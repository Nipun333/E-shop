import { Injectable, Session } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Seller } from "./seller.dto";
import { SellerEntity } from "./seller.entity";
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer/dist";

@Injectable()
export class SellerService{

    constructor(
        @InjectRepository(SellerEntity)
        private sellerRepo: Repository<SellerEntity>,
        private mailerService: MailerService
      ) {}



    Sellerhistory(session): string {
        return "Seller's Stats: "+ "\nEmail: "+session.email+"\nSession Id: "+session.id;
    }

    findSellerByname(qry): any {
        return this.sellerRepo.findOne({where: {name: qry.name}});
    }

    findAll(): any {
        return this.sellerRepo.find();
    }

    async register(mydto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password= hassedpassed;
        console.log(hassedpassed);
        return this.sellerRepo.save(mydto);
        }

    async login(email, password): Promise<any> {
       console.log(password);
    const mydata= await this.sellerRepo.findOneBy({email: email});
    const isMatch= await bcrypt.compare(password, mydata.password);
    if(isMatch) {
     return 1;
    }
    else {
     return 0;
    }
 }


    updateProfile(id,name,email,password,address): any {
        return this.sellerRepo.update(id,{name:name,email:email,password:password,address:address});
    }





    updateOne(id,mydto:Seller): any {
        return this.sellerRepo.update(id,mydto);
    }

    deleteUser(Uid): any {
       // return "Seller deleted name: " + Uid.name + " & id: "+ Uid +" \nSuccessfully deleted...";
        return this.sellerRepo.delete(Uid);
    }
    

    async sendEmail(mydata){
        return await this.mailerService.sendMail({
               to: mydata.email,
               subject: mydata.subject,
               text: mydata.text
             });
        
            }
    
}




