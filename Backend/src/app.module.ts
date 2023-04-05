import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './Product/product.module';

import { SellerModule } from './Seller/seller.module';

@Module({

  imports: [SellerModule, ProductModule, TypeOrmModule.forRoot(
   { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'SellerDB',
    autoLoadEntities: true,
    synchronize: true,
  })],

  controllers: [],
  providers: [],
})
export class AppModule {}
