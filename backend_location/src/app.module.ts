import { Module } from '@nestjs/common';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencesModule } from './agences/agences.module';
import { VillesModule } from './villes/villes.module';
import { LoueursModule } from './loueurs/loueurs.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { RegionModule } from './region/region.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host":  "localhost",
    "port":  3306,
    "username": "root",
    "password": "",
    "database": "location_serv",
    "entities": ["dist/**/**.entity{.ts,.js}"],
    "synchronize": true
}),
LocationsModule,
AgencesModule,
VillesModule,
LoueursModule,
UtilisateursModule,
RegionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



