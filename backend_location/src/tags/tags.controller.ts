import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagEntity } from './tag.entity/tag.entity';

@Controller('tags')
export class TagsController {
    constructor(private service: TagsService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getTags();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getTag(params.id);
    }

    @Post()
    create(@Body() tag: TagEntity) {
        return this.service.createTag(tag);
    }

    @Put()
    update(@Body() tag: TagEntity) {
        return this.service.updateTag(tag);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteTag(params.id);
    }

}
