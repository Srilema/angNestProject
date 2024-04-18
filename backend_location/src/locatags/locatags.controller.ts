import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { LocatagsService } from './locatags.service';
import { LocatagEntity } from './locatag.entity/locatag.entity';

@Controller('locatags')
export class LocatagsController {
    constructor(private service: LocatagsService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getLocatags();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getLocatag(params.id);
    }

    @Post()
    create(@Body() locatag: LocatagEntity) {
        return this.service.createLocatag(locatag);
    }

    @Put()
    update(@Body() locatag: LocatagEntity) {
        return this.service.updateLocatag(locatag);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteLocatag(params.id);
    }

}
