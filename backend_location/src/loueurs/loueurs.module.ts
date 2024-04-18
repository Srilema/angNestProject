import { Module } from '@nestjs/common';
import { LoueursService } from './loueurs.service';
import { LoueursController } from './loueurs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoueurEntity } from './loueur.entity/loueur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoueurEntity])],
  providers: [LoueursService],
  controllers: [LoueursController]
})
export class LoueursModule {}
