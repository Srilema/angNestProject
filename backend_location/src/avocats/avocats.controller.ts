import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AvocatsService } from './avocats.service';
import { AvocatEntity } from './avocat.entity/avocat.entity';

@Controller('avocats')
export class AvocatsController {
    constructor(private service: AvocatsService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getAvocats();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getAvocat(params.id);
    }

    @Post()
    create(@Body() avocat: AvocatEntity) {
        return this.service.createAvocat(avocat);
    }

    @Put()
    update(@Body() avocat: AvocatEntity) {
        return this.service.updateAvocat(avocat);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteAvocat(params.id);
    }

}
