import { Injectable } from '@nestjs/common';
import { Adminlogin, Productinfo, sellerinfo,Categoryinfo } from "./adminlogin.dto";
//import { Categoryinfo } from "./categoryinfo.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from "./adminentity.entity";
import { SellerEntity } from "./sellerentity.entity"


@Injectable()
export class AdminService {
   
    constructor(
        @InjectRepository(CategoryEntity)
        private adminRepo: Repository<CategoryEntity>,

      ) {}

      

  loginAdmin(mydto:Adminlogin):any {
    
    return "Admin Inserted name: "  + mydto.name+" and id is " + mydto.password;
}
getcategory(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.cname+"status is"+qry.status;
}

insertcategory(mydto:Categoryinfo):any {
    const categoryaccount = new CategoryEntity()
    categoryaccount.cname = mydto.cname;
    categoryaccount.status = mydto.status;
   return this.adminRepo.save(categoryaccount);
    
   // return "category id: "  + mydto.id+" and name is " + mydto.cname+"status is"+mydto.status;
}
getcateg(id):any{
    return this.adminRepo.findOneBy({id});
}
updatecategory(id,cname,status):any {
   // return "category updated id: " +id+" and name is " +cname+"status is"+status;
   //console.log(cname+id);
   return this.adminRepo.update(id,{cname:cname,status:status});
}
deletecategorybyid(id):any {
    
    //return "Delete id is "+id;

    return this.adminRepo.delete(id);
}
insertproduct(mydto:Productinfo):any {
    
    return "product id: "  + mydto.id+" and product name is " + mydto.pname+"MRP is"+mydto.mrp +"price is"+mydto.price+"status is"+mydto.status;
}
updateproduct(id,pname,mrp,price,status):any {
    return "product id: "  + id+" and product name is " + pname+"MRP is"+mrp +"price is"+price+"status is"+status;

}
deleteproductbyid(id):any {
    
    return "Delete id is "+id;
}


/*getseller():any{
    return this.adminRepo.find();
}

insertseller(mydto:sellerinfo):any {
    const selleraccount = new SellerEntity()
    selleraccount.sname = mydto.sname;
    selleraccount.email = mydto.email;
    selleraccount.phn = mydto.phn;
    selleraccount.address = mydto.address;


   return this.adminRepo1.save(selleraccount);
   // return "seller id: "  + mydto.id+" and name is " + mydto.sname+"email is"+mydto.email+"phone number is"+mydto.phn+"address is"+mydto.address;
}
updateseller(id,sname,email,phn,address):any {
    return "seller id: "  + id+" and selller name is " + sname+"email is"+email+"phone number is"+phn+"address is"+address;

}*/
}

@Injectable()
export class sellerService{
    constructor(
       
        @InjectRepository(SellerEntity)
        private adminRepo: Repository<SellerEntity>,

      ) {}
      getseller(id):any{
        return this.adminRepo.findOneBy({id});
    }
    
    insertseller(mydto:sellerinfo):any {
        const selleraccount = new SellerEntity()
        selleraccount.sname = mydto.sname;
        selleraccount.email = mydto.email;
        selleraccount.phn = mydto.phn;
       // selleraccount.address = mydto.address;
    
    
       return this.adminRepo.save(selleraccount);
       // return "seller id: "  + mydto.id+" and name is " + mydto.sname+"email is"+mydto.email+"phone number is"+mydto.phn+"address is"+mydto.address;
    }
    updateseller(id,sname,email,phn):any {
        return this.adminRepo.update(id,{sname:sname,email:email,phn:phn});

        
        //return "seller id: "  + id+" and selller name is " + sname+"email is"+email+"phone number is"+phn+"address is"+address;
    
    }
    deletesellerbyid(id):any {
    
        //return "Delete id is "+id;
    
        return this.adminRepo.delete(id);
    }

}
