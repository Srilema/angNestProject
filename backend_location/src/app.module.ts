import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VillesModule } from './villes/villes.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { PhotosModule } from './photos/photos.module';
import { RegionsModule } from './regions/regions.module';
import { TagsModule } from './tags/tags.module';
import { LocatagsModule } from './locatags/locatags.module';

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
VillesModule,
UtilisateursModule,
PhotosModule,
RegionsModule,
TagsModule,
LocatagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
