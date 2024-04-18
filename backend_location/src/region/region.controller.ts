import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionEntity } from '../regions/region.entity/region.entity';

@Controller('region')
export class RegionController {
    constructor(private service: RegionService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getRegions();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getRegion(params.id);
    }

    @Post()
    create(@Body() region: RegionEntity) {
        return this.service.createRegion(region);
    }

    @Put()
    update(@Body() region: RegionEntity) {
        return this.service.updateRegion(region);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteRegion(params.id);
    }
}

