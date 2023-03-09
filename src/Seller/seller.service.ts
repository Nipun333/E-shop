import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Seller } from "./seller.dto";
import { SellerEntity } from "./seller.entity";

@Injectable()
export class SellerService{

    constructor(
        @InjectRepository(SellerEntity)
        private sellerRepo: Repository<SellerEntity>,
      ) {}


    getSeller():any {
          return "Seller's Profile: ";
    }

    Sellerhistory(): string {
        return "Seller's Statistics: ";
    }

    findSellerByname(qry): any {
        return this.sellerRepo.findOne({where: {name: qry.name}});
    }

    findAll(): any {
        return this.sellerRepo.find();
    }

    register(mydto:Seller): any {
        return this.sellerRepo.save(mydto);
    }

    async login(Uname,Upassword): Promise<any> {
        const ext = await this.sellerRepo.findOne({where: {name: Uname, password: Upassword}})
        if(!ext)
        {
            return "Login Unsuccessfull";
        }
        else
            return "logged in";
        
     }

    /* productAdd(name, id): any {
        return  "Product name: "+ name + " & id: " + id ;
    }*/

    updateProfile(id,name,email,password,address): any {
        return this.sellerRepo.update(id,{name:name,email:email,password:password,address:address});
    }

   /* deleteProduct(id): any{
        return this.sellerRepo.delete(id);
    }

   /* updateProduct(productName, productId):any{
        const ddtoObject = new Seller;
        
    }*/




    updateOne(id,mydto:Seller): any {
        return this.sellerRepo.update(id,mydto);
    }

    deleteUser(Uid): any {
       // return "Seller deleted name: " + Uid.name + " & id: "+ Uid +" \nSuccessfully deleted...";
        return this.sellerRepo.delete(Uid);
    }

    /*deleteProduct(productName,productId): any {
        
    }*/
    
    
}




