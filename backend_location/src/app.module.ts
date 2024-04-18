import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencesModule } from './agences/agences.module';

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
AgencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
