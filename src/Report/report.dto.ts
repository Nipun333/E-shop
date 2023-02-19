import { IsAlpha, IsBoolean, IsDate, IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxDate, MaxLength, MinLength } from "class-validator";

export class ReportDTO{
    
    @IsString({message: "Please enter your Last name"})
    @MaxLength(15,{message:"Maximum length of the Report tittle can't exceed 25 characters"})
    @MinLength(5, {message:"Minimum length of the Report tittle can't exceed 3 characters"})
    @IsNotEmpty({message:"Report tittle can't be empty"})
    ReportTittle:string;

    @IsString({message: "Please enter your Last name"})
    @IsNotEmpty({message:"Discription can't be empty"})
    Discription:string;


    //Formet YYYY-MM-DD
    @IsNotEmpty({message:"Reported Date can't be empty"})
    @IsDateString()
    ReportedDate:Date;

    @IsString({message: "Please enter a Username"})
    @IsNotEmpty({message:"Username can't be empty"})
    ReportedUsername:string;

    @IsNumber()
    @IsNotEmpty({message:"UserId can't be empty"})
    ReportedUserId: number;

    @IsString({message: "Please enter a Username"})
    @IsNotEmpty({message:"Moderator username can't be empty"})
    ProcessedByUsername:string;

    @IsNumber()
    @IsNotEmpty({message:"Moderator username can't be empty"})
    ProcessedByUserID: number;
    
}