import { Body, Controller, Get, Param, Post, Put, Delete, Query, UsePipes, ValidationPipe, ParseIntPipe, Patch, Session, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, UseInterceptors, UnauthorizedException, UseGuards } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer"
import { Seller } from "./seller.dto";
import { SellerService } from "./seller.service";
import { SessionGuard } from "./session.guard";


@Controller("/Seller")

export class SellerController {

constructor(private sellerService: SellerService){}

@Get("/dashboard")
@UseGuards(SessionGuard)
 getSeller(@Session() session): string {

    return "Seller's Profile: "+"\n\nEmail: "+session.email+"\nSession Id: "+session.id;
 }
@Get("/sellerhistory")
@UseGuards(SessionGuard)
Sellerhistory(@Session() session): string {
    return this.sellerService.Sellerhistory(session);
}

@Get("/findbyname")
@UseGuards(SessionGuard)
findSellerByname(@Query() qry: any): any {
    return this.sellerService.findSellerByname(qry);
}

@Get("/findall")
@UseGuards(SessionGuard)
findAll(): any {
   return this.sellerService.findAll();
}

@Post("/registration")
@UsePipes(new ValidationPipe())

@UseInterceptors(FileInterceptor('image',
{
   storage: diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+"-"+file.originalname)
  }
})
}))

register(@Body() mydto:Seller, @UploadedFile( new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 1500000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) image: Express.Multer.File){
  
  mydto.filename = image.filename;  
  
  return this.sellerService.register(mydto);
  
  }


@Get("/login")
@UsePipes(new ValidationPipe())
login(@Session() session, @Body("email") email:string, @Body("password") password:string ): any {
    
if(this.sellerService.login(email,password))
{
  session.email = email;
  console.log(session.email);
  return "Login successfull";

}
else
{
  return "Invalid username or password";
}

}


@Put("/updateProfile/")
@UseGuards(SessionGuard)
updateProfile(@Body("id",ParseIntPipe) id:number,
@Body("name") name:string,
@Body("email") email:string,
@Body("password") password:string,
@Body("address") address:string,): any {
    return this.sellerService.updateProfile(id,name,email,password,address);
}


@Patch("/updateAddress/:id")
@UseGuards(SessionGuard)
updateAddress(@Param("id",ParseIntPipe) id: number, @Body() mydto:Seller): string {
   return this.sellerService.updateOne(id,mydto);
}

@Delete ("/deleteUser/:id")
@UseGuards(SessionGuard)
deleteUser(@Param("id", ParseIntPipe) Uid:number): any {
    return this.sellerService.deleteUser(Uid);
}

@Post("/sendemail")
@UseGuards(SessionGuard)
sendEmail(@Body() mydata){
return this.sellerService.sendEmail(mydata);
}

@Get('/logout')
signout(@Session() session)
{
    
  if(session.destroy())
  {
    return "successfully logged out";
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}

}
