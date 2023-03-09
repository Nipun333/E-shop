import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportController } from "./report.controller";
import { ReportEntity } from "./report.entity";
import { ReportService } from "./report.service";

@Module(
    {
        imports: [TypeOrmModule.forFeature([ReportEntity])],
        controllers:[ReportController],
        providers:[ReportService],
    }
)
export class ReportModule {}