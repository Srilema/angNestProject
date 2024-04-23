import { Module } from '@nestjs/common';
import { LocatagsService } from './locatags.service';
import { LocatagsController } from './locatags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocatagEntity } from './locatag.entity/locatag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocatagEntity])],
  providers: [LocatagsService],
  controllers: [LocatagsController]
})
export class LocatagsModule {}
