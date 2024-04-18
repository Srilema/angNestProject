import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencesModule } from './agences/agences.module';
import { VillesModule } from './villes/villes.module';
import { LoueursModule } from './loueurs/loueurs.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { PhotosModule } from './photos/photos.module';
import { RegionsModule } from './regions/regions.module';
import { TagsModule } from './tags/tags.module';

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
PhotosModule,
RegionsModule,
TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
