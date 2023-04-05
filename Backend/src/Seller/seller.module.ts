import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SellerController } from "./seller.controller";
import { SellerEntity } from "./seller.entity";
import { SellerService} from "./seller.service";
import {MailerModule} from "@nestjs-modules/mailer";

@Module(
{
  imports:  [MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
               port: 465,
               ignoreTLS: true,
               secure: true,
               auth: {
                   user: "sadmannipun@gmail.com",
                   pass: "cnfxopcvwjxhmwly"
               },
              }
  }), TypeOrmModule.forFeature([SellerEntity])],
  controllers: [SellerController],
  providers: [SellerService],
})

export class SellerModule {}