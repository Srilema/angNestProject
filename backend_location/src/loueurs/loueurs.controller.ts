import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { LoueursService } from './loueurs.service';
import { LoueurEntity } from './loueur.entity/loueur.entity';

@Controller('loueurs')
export class LoueursController {
    constructor(private service: LoueursService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getLoueurs();
    }

    @Get(':id')
    get(@Param('id') id: number) {
        return this.service.getLoueur(id);
    }

    @Post()
    create(@Body() loueur: LoueurEntity) {
        return this.service.createLoueur(loueur);
    }

    @Put()
    update(@Body() loueur: LoueurEntity) {
        return this.service.updateLoueur(loueur);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteLoueur(params.id);
    }
}
