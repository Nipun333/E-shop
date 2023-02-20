import { Module } from '@nestjs/common';
import { AdminController,sellerController } from './admin.controller';
import { AdminService,sellerService } from './adminservice.service';
import { TypeOrmModule } from "@nestjs/typeorm";
//import { AdminModule } from './admin/adminmodule.module';
import { CategoryEntity } from "./adminentity.entity";
import { SellerEntity } from "./sellerentity.entity"

@Module({
  //imports: [AdminModule],
  imports: [TypeOrmModule.forFeature([CategoryEntity,SellerEntity])],
  controllers: [AdminController,sellerController],
  providers: [AdminService,sellerService],
})
export class AdminModule {}
