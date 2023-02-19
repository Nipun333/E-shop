import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportEntity } from "src/Report/report.entity";
import { ReportService } from "src/Report/report.service";
import { ModeratorController } from "./moderator.controller";
import { ModeratorEntity } from "./moderator.entity";
import { ModeratorService } from "./moderator.service";

@Module(
    {
        imports: [TypeOrmModule.forFeature([ModeratorEntity])],
        controllers:[ModeratorController],
        providers:[ModeratorService],
    }
)
export class ModeratorModule {}