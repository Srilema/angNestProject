import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoueursModule } from './loueurs/loueurs.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';

@Module({
  imports: [LoueursModule, UtilisateursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
