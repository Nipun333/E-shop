import { IsAlpha, IsBoolean, IsDate, IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, Matches, MaxDate, MaxLength, MinLength } from "class-validator";

export class ModeratorDTO{

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

    @IsString({message: "Please enter your Username"})
    @MaxLength(15,{message:"Maximum length of the Username can't exceed 15 characters"})
    @MinLength(5, {message:"Minimum length of the Username can't exceed 5 characters"})
    @IsNotEmpty({message:"Username can't be empty"})
    Username:string;

    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/, {message:"Password must contain one Upper Case letter 1 Lower case letter and a number"})
    @MaxLength(25,{message:"Maximum length of the Password can't exceed 25 characters"})
    @MinLength(8, {message:"Minimum length of the Password can't exceed 8 characters"})
    Password:string;

    @IsOptional()
    @IsBoolean({message:"Enter a boolean value: true or false"})
    Blocked:boolean;

}