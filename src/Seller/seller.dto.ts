import { IsEmail, isEmail, IsNotEmpty, isNumber, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class Seller{   
    @IsNotEmpty({message: "Id can't be empty!"}) 
    @IsNumber()
    id: number;

    @IsNotEmpty({message: "Name can't be empty!"})
    @IsString({message:"Name should be a string"})
    @MinLength(3, {message: "Name is too short"} )
    @MaxLength(10, {message: "Name is too big!"} )
    name: string;

    @IsNotEmpty({message: "Email can't be empty!"})
    @IsEmail() 
    email: string;

    @IsNotEmpty({message: "Password can't be empty!"})
    password: string;

    @IsNotEmpty({message: "Address can't be empty!"})
    address: string;
    


}