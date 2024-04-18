import { Module } from '@nestjs/common';
import { AgencesService } from './agences.service';
import { AgencesController } from './agences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenceEntity } from './agence.entity/agence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgenceEntity])],
  providers: [AgencesService],
  controllers: [AgencesController]
})
export class AgencesModule {}
