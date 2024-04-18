import { Module } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';
import { UtilisateurEntity } from './utilisateur.entity/utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UtilisateurEntity])],
  providers: [UtilisateursService],
  controllers: [UtilisateursController]
})
export class UtilisateursModule {}
