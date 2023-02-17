import { IsAlpha, IsBoolean, IsDate, IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, Matches, MaxDate, MaxLength, MinLength } from "class-validator";

export class EditModeratorDTO{

    @IsAlpha()
    @IsString({message: "Please enter your First name"})
    @MaxLength(15,{message:"Maximum length of the first name can't exceed 15 characters"})
    @MinLength(5, {message:"Minimum length of the first name can't exceed 3 characters"})
    @IsNotEmpty({message:"First name can't be empty"})
    Firstname:string;

    @IsAlpha()
    @IsString({message: "Please enter your Last name"})
    @MaxLength(15,{message:"Maximum length of the first name can't exceed 15 characters"})
    @MinLength(3, {message:"Minimum length of the first name can't exceed 3 characters"})
    @IsNotEmpty({message:"Last name can't be empty"})
    Lastname:string;


    //Formet YYYY-MM-DD
    @IsNotEmpty({message:"Date of birth can't be empty"})
    @IsDateString()
    DOB:Date;

    @IsEmail()
    @Matches("^[^@\s]+@[^@\s]+\.(com|net|org|gov|edu)$")
    Email:string;

    @MaxLength(15,{message:"Maximum length of the Mobile number can't exceed 15 characters"})
    @MinLength(11, {message:"Minimum length of the Mobile number can't exceed 3 characters"})
    @IsMobilePhone("bn-BD")
    Phone:string;

    @IsOptional()
    @IsBoolean({message:"Enter a boolean value: true or false"})
    Blocked:boolean;

}