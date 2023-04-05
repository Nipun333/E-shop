import { Controller, Get, Param, ParseIntPipe, Query ,Post ,Body ,Put,Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { AdminService,sellerService } from './adminservice.service';
import { Adminlogin, Categoryinfo, Productinfo, sellerinfo } from "./adminlogin.dto";
//import { Categoryinfo } from "./categoryinfo.dto";

@Controller()
export class AdminController{
      constructor(private readonly adminService: AdminService) {}
     // constructor(private readonly adminService: sellerService) {}

    @Get("/:id") 
    getinfo(@Param("id", ParseIntPipe) id:number):any{
        return "id is"+id;
    }
    @Post("/adminlog")
    @UsePipes(new ValidationPipe())
    loginAdmin(@Body() mydto:Adminlogin): any {
      return this.adminService.loginAdmin(mydto);
    }

    @Get("/findadmin")
    getcategory(@Query() qry :any):any{
    return "Admin name is"+ qry.name;
    }
    
    @Post("/cinfo")
    //@UsePipes(new ValidationPipe())
    insertcategory(@Body() mydto:Categoryinfo): any {
      return this.adminService.insertcategory(mydto);
    }
    @Get("/cinfo/:id")
    getcateg(@Param('id', ParseIntPipe) id: number):any{
      return this.adminService.getcateg(id);
    }

    @Put("/updatecategory/")
    updatecategory( 
      @Body("id") id:number, 
      @Body("cname") cname:string,
      @Body("status") status:string
      ): any {
    return this.adminService.updatecategory(id, cname,status);
    }

    @Delete("/deletecategory/:id")
    deletecategorybyid( 
       @Param("id") id:number
        ): any {
      return this.adminService.deletecategorybyid(id);
      }
      @Get("/viewproduct")
      getproduct(@Query() qry :any):any{
      return "Admin name is"+ qry.id;
      }
      @Post("/pinfo")
      @UsePipes(new ValidationPipe())
      insertproduct(@Body() mydto1:Productinfo): any {
        return this.adminService.insertproduct(mydto1);
      }
      @Put("/updateproduct/")
    updateproduct( 
      @Body("id") id:number, 
      @Body("pname") pname:string,
      @Body("mrp") mrp:number,
      @Body("price") price:number,
      @Body("status") status:string
      ): any {
    return this.adminService.updateproduct(id, pname,mrp,price,status);
    }
    @Delete("/deleteproduct/:id")
    deleteproductbyid( 
       @Param("id") id:number
        ): any {
      return this.adminService.deleteproductbyid(id);
      }


     /* @Get("/cinfo")
      getseller():any{
       // return this.sellerService.getseller();
      }


      @Post("/sellerinfo")
      insertseller(@Body() mydto1:sellerinfo): any {
       // return this.sellerService.insertseller(mydto1);
      } 
      
      @Put("/updateseller/")
      updateseller( 
        @Body("id") id:number, 
        @Body("sname") sname:string,
        @Body("email") email:number,
        @Body("phn") phn:number,
        @Body("address") address:string
        ): any {
      return this.adminService.updateproduct(id, sname,email,phn,address);
      }*/
}
@Controller()
export class sellerController{
    constructor(private readonly sellerService: sellerService) {}

  @Get("/sinfo/:id")
      getseller(@Param('id', ParseIntPipe) id: number):any{
        return this.sellerService.getseller(id);
      }


      @Post("/sellerinfo")
      insertseller(@Body() mydto1:sellerinfo): any {
        return this.sellerService.insertseller(mydto1);
      } 
      @Put("/updateseller/")
      updateseller( 
        @Body("id") id:number, 
        @Body("sname") sname:string,
        @Body("email") email:number,
        @Body("phn") phn:number
        ): any {
      return this.sellerService.updateseller(id, sname,email,phn);
      }

      @Delete("/deleteseller/:id")
    deletesellerbyid( 
       @Param("id") id:number
        ): any {
      return this.sellerService.deletesellerbyid(id);
      }
}