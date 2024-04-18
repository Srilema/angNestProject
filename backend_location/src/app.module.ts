import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoueursModule } from './loueurs/loueurs.module';

@Module({
  imports: [LoueursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
