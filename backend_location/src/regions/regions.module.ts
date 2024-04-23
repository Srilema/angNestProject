import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionEntity } from './region.entity/region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegionEntity])],
  providers: [RegionsService],
  controllers: [RegionsController]
})
export class RegionsModule {}
