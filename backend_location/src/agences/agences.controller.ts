import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AgencesService } from './agences.service';
import { AgenceEntity } from './agence.entity/agence.entity';

@Controller('agences')
export class AgencesController {
    constructor(private service: AgencesService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getAgences();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getAgence(params.id);
    }

    @Post()
    create(@Body() agence: AgenceEntity) {
        return this.service.createAgence(agence);
    }

    @Put()
    update(@Body() agence: AgenceEntity) {
        return this.service.updateAgence(agence);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteAgence(params.id);
    }

}
