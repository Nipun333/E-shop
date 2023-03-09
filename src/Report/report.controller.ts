import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ReportDTO } from "./report.dto";
import { ReportService } from "./report.service";

@Controller("/report")
export class ReportController{
    
    constructor(private reportService: ReportService){}

    @Post("/add")
    @UsePipes(new ValidationPipe())
    register(@Body() reportDTO: ReportDTO): any{
        return this.reportService.addReport(reportDTO);
    }


}