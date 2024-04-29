import { Module } from '@nestjs/common';
import { AvocatsService } from './avocats.service';
import { AvocatsController } from './avocats.controller';
import { AvocatEntity } from './avocat.entity/avocat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AvocatEntity])],
  providers: [AvocatsService],
  controllers: [AvocatsController]
})
export class AvocatsModule {}