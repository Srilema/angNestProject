import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { VillesService } from './villes.service';
import { VilleEntity } from './ville.entity/ville.entity';


@Controller('villes')
export class VillesController {
    constructor(private service: VillesService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getVilles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getVille(params.id);
    }

    @Post()
    create(@Body() product: VilleEntity) {
        return this.service.createVille(product);
    }

    @Put()
    update(@Body() product: VilleEntity) {
        return this.service.updateVille(product);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteVille(params.id);
    }


}
