import { Body, Controller, Get, Param, Post, Put, Delete, Query, UsePipes, ValidationPipe, ParseIntPipe, Patch } from "@nestjs/common";
import { Seller } from "./seller.dto";
import { SellerService } from "./seller.service";


@Controller("/Seller")

export class SellerController {

constructor(private sellerService: SellerService){}

@Get("/dashboard")
 getSeller(): string {
  return this.sellerService.getSeller();
 }

@Get("/sellerhistory")
Sellerhistory(): string {
    return this.sellerService.Sellerhistory();
}

@Get("/findbyname")
findSellerByname(@Query() qry: any): any {
    return this.sellerService.findSellerByname(qry);
}

@Get("/findall")
findAll(): any {
   return this.sellerService.findAll();
}

@Post("/registration")
@UsePipes(new ValidationPipe())
register(@Body() mydto:Seller): any {
    return this.sellerService.register(mydto);
}

@Post("/login")
@UsePipes(new ValidationPipe())
login(@Body("name") name:string,
      @Body('password') password:string ): any {
   return this.sellerService.login(name,password);
}

/*@Post("/insertproduct")

productAdd(@Body("name") name: string, @Body("id") id: number): any {
    return this.sellerService.productAdd(name,id);
}*/

@Put("/updateProfile/")
updateProfile(@Body("id",ParseIntPipe) id:number,
@Body("name") name:string,
@Body("email") email:string,
@Body("password") password:string,
@Body("address") address:string,): any {
    return this.sellerService.updateProfile(id,name,email,password,address);
}

/*@Put("/updateProduct/:name/:id")

updateProduct(@Param('name') productName: string, @Param('id') productId:number): any {
    return this.sellerService.updateProduct(productName,productId);
}*/

@Patch("/updateAddress/:id")
updateAddress(@Param("id",ParseIntPipe) id: number, @Body() mydto:Seller): string {
   return this.sellerService.updateOne(id,mydto);
}

@Delete ("/deleteUser/:id")
deleteUser(@Param("id", ParseIntPipe) Uid:number): any {
    return this.sellerService.deleteUser(Uid);
}

/*@Delete ("/deleteProduct/:id")
deleteProduct(@Param('id') Pid: number): any {
    return this.sellerService.deleteProduct(Pid);
}*/



}
