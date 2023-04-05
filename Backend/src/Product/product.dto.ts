import {  IsNotEmpty } from "class-validator";

export class ProductDTO{

    @IsNotEmpty({message:"Product name can't be empty"})
    ProductName:string;

    @IsNotEmpty({message:"Ammount can't be empty"})
    Price:number;

    @IsNotEmpty({message:"Disctiption can't be empty"})
    Description:string;

    @IsNotEmpty({message:"Sellername can't be empty"})
    Sellername:string;

    @IsNotEmpty({message:"Quantity can't be empty"})
    Quantity:number;

    SoldQuantity:number;

    @IsNotEmpty()
    filename: string

}