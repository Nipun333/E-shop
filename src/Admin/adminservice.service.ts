import { Injectable } from '@nestjs/common';
import { Adminlogin, Productinfo, sellerinfo } from "./adminlogin.dto";
// import { Categoryinfo } from "./categoryinfo.dto";

@Injectable()
export class AdminService {
   
  loginAdmin(mydto:Adminlogin):any {
    
    return "Admin Inserted name: "  + mydto.name+" and id is " + mydto.password;
}
getcategory(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.cname+"status is"+qry.status;
}

// insertcategory(mydto:Categoryinfo):any {
    
//     return "category id: "  + mydto.id+" and name is " + mydto.cname+"status is"+mydto.status;
// }
updatecategory(id,cname,status):any {
    return "category updated id: " +id+" and name is " +cname+"status is"+status;
}
deletecategorybyid(id):any {
    
    return "Delete id is "+id;
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
insertseller(mydto:sellerinfo):any {
    
    return "seller id: "  + mydto.id+" and name is " + mydto.sname+"email is"+mydto.email+"phone number is"+mydto.phn+"address is"+mydto.address;
}
updateseller(id,sname,email,phn,address):any {
    return "seller id: "  + id+" and selller name is " + sname+"email is"+email+"phone number is"+phn+"address is"+address;

}
}
