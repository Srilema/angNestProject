import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationEntity } from './location.entity/location.entity';

@Controller('locations')
export class LocationsController {
    constructor(private service: LocationsService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getLocations();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getLocation(params.id);
    }

    @Post()
    create(@Body() location: LocationEntity) {
        return this.service.createLocation(location);
    }

    @Put()
    update(@Body() location: LocationEntity) {
        return this.service.updateLocation(location);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteLocation(params.id);
    }

}
