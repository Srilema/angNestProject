import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UtilisateurEntity } from './utilisateur.entity/utilisateur.entity';
import { UtilisateursService } from './utilisateurs.service';

@Controller('utilisateurs')
export class UtilisateursController {
    constructor(private service: UtilisateursService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getUtilisateurs();
    }

    @Get(':id')
    get(@Param('id') id: number) {
        return this.service.getUtilisateur(id);
    }

    @Post()
    create(@Body() utilisateur: UtilisateurEntity) {
        return this.service.createUtilisateur(utilisateur);
    }

    @Put()
    update(@Body() utilisateur: UtilisateurEntity) {
        return this.service.updateUtilisateur(utilisateur);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUtilisateur(params.id);
    }
}
