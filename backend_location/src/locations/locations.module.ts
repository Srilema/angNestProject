import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { LocationEntity } from './location.entity/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  providers: [LocationsService],
  controllers: [LocationsController]
})
export class LocationsModule {}
