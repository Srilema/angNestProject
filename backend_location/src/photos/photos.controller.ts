import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotoEntity } from './photo.entity/photo.entity';

@Controller('photos')
export class PhotosController {
    constructor(private service: PhotosService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getPhotos();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getPhoto(params.id);
    }

    @Post()
    create(@Body() product: PhotoEntity) {
        return this.service.createPhoto(product);
    }

    @Put()
    update(@Body() product: PhotoEntity) {
        return this.service.updatePhoto(product);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deletePhoto(params.id);
    }

}
