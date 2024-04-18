import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { RegionService } from './region/region.service';

@Module({
  imports: [RegionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



