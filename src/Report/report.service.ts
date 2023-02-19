import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ModeratorEntity } from "src/Moderator/moderator.entity";
import { Repository } from "typeorm";
import { ReportDTO } from "./report.dto";
import { ReportEntity } from "./report.entity";

@Injectable()
export class ReportService {
    
    constructor(
        @InjectRepository(ReportEntity)
        private reportRepo: Repository<ReportEntity>,
        private moderatorRepo: Repository<ModeratorEntity>
    ){}

    addReport(reportDTO: ReportDTO):any{
        const reportObject = new ReportEntity()
        reportObject.ReportTittle = reportDTO.ReportTittle;
        reportObject.Discription = reportDTO.Discription;
        reportObject.ReportedDate = new Date();
        reportObject.ReportedUsername = reportDTO.ReportedUsername;
        reportObject.ReportedUserId = reportDTO.ReportedUserId;
        reportObject.ProcessedByUsername = reportDTO.ProcessedByUsername;
        reportObject.ProcessedByUserID = reportDTO.ProcessedByUserID;

        return this.reportRepo.save(reportObject);
        
    }


}