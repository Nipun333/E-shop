import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SellerController } from "./seller.controller";
import { SellerEntity } from "./seller.entity";
import { SellerService} from "./seller.service";

@Module(
{
  imports:  [TypeOrmModule.forFeature([SellerEntity])],
  controllers: [SellerController],
  providers: [SellerService],
})

export class SellerModule {}