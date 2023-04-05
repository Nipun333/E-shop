import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Patch, Post, Put, Query, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { DESTRUCTION } from "dns";
import { Cookie } from "express-session";
import { diskStorage } from "multer";
import { ProductDTO } from "./product.dto";

import { SessionGuard } from "./product.guard";
import { ProductService } from "./product.service";

@Controller('/Product')
export class ProductController{
    constructor(private productService: ProductService){}

    @Post('/add')
    @UseGuards(SessionGuard)
    @UseInterceptors(FileInterceptor('image',
    {storage:diskStorage({
      destination: './uploads',
      filename: function (req, file, cb) {
        cb(null,Date.now()+"-"+file.originalname)
      }
    })

    }))
    Addproduct(@Body() mydto:ProductDTO,@UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1500000 }),
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File){
    
        mydto.filename = file.filename;

        return this.productService.add(mydto);
    }

    @Get('/getAll')
    @UseGuards(SessionGuard)
    getAll(): any {
        return this.productService.getAll();
    }


    @Get("search/:ProductName")
    @UseGuards(SessionGuard)
    searchByName(@Param('ProductName') ProductName:string){
        return this.productService.searchByName(ProductName);
    }

    @Post("/insertproduct")
    @UseGuards(SessionGuard)
    productAdd(@Body("Productname") Pname: string, @Body("Price") price: number, @Body("Quantity") quantity: number ): any {
    return this.productService.productAdd(Pname, price, quantity);
}

    @Delete('delete/:Id')
    @UseGuards(SessionGuard)
    deleteModeratorById(@Param('Id', ParseIntPipe) id: number): any {
        return this.productService.deleteProduct(id);
    }

    @Put("/updateProduct")
    @UseGuards(SessionGuard)
    updateProduct(@Body("Id",ParseIntPipe) id:number,
    @Body("Productname") Productname:string,
    @Body("Price") Price:number,
    @Body("Quantity") Quantity:number,
    @Body("SoldQuantity") SoldQuantity:number,): any{

        return this.productService.updateProduct(id, Productname, Price, Quantity, SoldQuantity);
    }

    @Patch("/updateProduct/:Id")
    @UseGuards(SessionGuard)
    updateAddress(@Param("Id",ParseIntPipe) id: number, @Body() mydto:ProductDTO): string {
   return this.productService.updateOne(id,mydto);
} 

    @Get("search/findbyProductname")
    @UseGuards(SessionGuard)
    findbyProductname(@Query() qry: any): any {
    return this.productService.findbyProductname(qry);

}

    @Get("search/:Sellername")
    @UseGuards(SessionGuard)
    findbySellername(@Param("Sellername") seller : string): any {
    return this.productService.findbySellername(seller);
    }


    @Get('/logout')
    signout(@Session() session)
   {
  
     if(session.destroy())
    {
      session.cookie.destroy;
    return {message:"successfully logged out"};
    }
    else
    {
    throw new UnauthorizedException("invalid actions");
    }
   }


 }
    

