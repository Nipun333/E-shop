import { IsAlpha, IsBoolean, IsDate, IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, Matches, MaxDate, MaxLength, MinLength } from "class-validator";

export class SecureModeratorDTO{

    Firstname:string;
    Lastname:string;
    DOB:Date;
    Email:string;
    Phone:string;
    Username:string;

}