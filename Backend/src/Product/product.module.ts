import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SellerEntity } from "src/Seller/seller.entity";
import { ProductController } from "./product.controller";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";

@Module(
    {
        imports: [TypeOrmModule.forFeature([SellerEntity, ProductEntity])],
        controllers: [ProductController],
        providers: [ProductService],
    }
)
export class ProductModule {}