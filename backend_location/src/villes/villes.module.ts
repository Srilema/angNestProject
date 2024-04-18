import { Module } from '@nestjs/common';
import { VillesService } from './villes.service';
import { VillesController } from './villes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VilleEntity } from './ville.entity/ville.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VilleEntity])],
  providers: [VillesService],
  controllers: [VillesController]
})
export class VillesModule {}
