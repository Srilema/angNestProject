import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TagEntity } from './tag.entity/tag.entity';

@Injectable()
export class TagsService {
    constructor(@InjectRepository(TagEntity) private tagsRepository: Repository<TagEntity>) { }

    async getTags(): Promise<TagEntity[]> {
        return await this.tagsRepository.find();
    }

    async getTag(_id: number): Promise<TagEntity[]> {
        return await this.tagsRepository.find({
            where: [{ "id": _id }],
            relations:["locatag"]
        });
    }

    async createTag(tag: TagEntity){
        return await this.tagsRepository.save(tag);
    }

    async updateTag(tag: TagEntity) {
        this.tagsRepository.save(tag)
    }

    async deleteTag(tag: TagEntity) {
        this.tagsRepository.delete(tag);
    }

}
