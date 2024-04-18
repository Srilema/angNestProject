import { Module } from '@nestjs/common';
import { LoueursService } from './loueurs.service';
import { LoueursController } from './loueurs.controller';

@Module({
  providers: [LoueursService],
  controllers: [LoueursController]
})
export class LoueursModule {}
