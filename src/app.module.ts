import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SellerModule } from './Seller/seller.module';
import { ModeratorModule } from './Moderator/moderator.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  //import individual module here. Do not override this 
  //Don't delete this
  imports: [SellerModule, ModeratorModule, TypeOrmModule.forRoot({
    type:'postgres',
    host: 'localhost',
    port:5432,
    username:'postgres',
    password:'112233',
    database:'test',
    autoLoadEntities: true,
    synchronize: true,
  })],
  
  //import modules here
  imports: [SellerModule, ModeratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
