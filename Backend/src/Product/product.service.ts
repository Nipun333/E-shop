import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SellerEntity } from "src/Seller/seller.entity";
import { Repository } from "typeorm";
import { ProductDTO } from "./product.dto";
import { ProductEntity } from "./product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(SellerEntity)
        private sellerRepo: Repository<SellerEntity>,

        @InjectRepository(ProductEntity)
        private productRepo: Repository<ProductEntity>,

    ){}


        async add(mydto) {

            const existSeller = await this.sellerRepo.findOneBy({ name: mydto.Sellername });
    
            if (existSeller) {
                const product = new ProductEntity();
                product.seller = existSeller;
                product.ProductName = mydto.ProductName;
                product.Price = mydto.Price;
                product.Description = mydto.Description;
                product.Sellername = mydto.Sellername;
                product.Quantity = mydto.Quantity;
                product.SoldQuantity= mydto.SoldQuantity;
                product.filename = mydto.filename;
                return this.productRepo.save(product);
            } else {
                return "seller not found";
            }
        }

     getAll(): any {
       return this.productRepo.find();
    }


    async searchByName(ProductName):Promise<any>{
        var ext = this.productRepo.find({where: { ProductName:ProductName }});
        if(ext){
            return ext;
        }
        else
            return "No matches found for this product name!"; 
    }

    productAdd(Pname, price, quantity): any {
        return  "Product name: "+ Pname + " price: " + price+ " quantity: "+quantity ;
    }

    deleteProduct(id): any{
        return this.productRepo.delete(id);
    }

    updateProduct(id, Productname, Price, Quantity, SoldQuantity): any {
        return this.productRepo.update(id, {ProductName:Productname, Price:Price, Quantity:Quantity, SoldQuantity:SoldQuantity});
    }

    updateOne(id,mydto:ProductDTO): any {
        return this.productRepo.update(id,mydto);
    }

    findbyProductname(qry): any {
        return this.productRepo.find({where: {ProductName: qry}});
    }

    findbySellername(seller): any {
        return this.productRepo.find({where: {Sellername:seller}});
    }

}