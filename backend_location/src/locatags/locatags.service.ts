import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LocatagEntity } from './locatag.entity/locatag.entity';
@Injectable()
export class LocatagsService {
    constructor(@InjectRepository(LocatagEntity) private locatagsRepository: Repository<LocatagEntity>) { }

    async getLocatags(): Promise<LocatagEntity[]> {
        return await this.locatagsRepository.find();
    }

    async getLocatag(_id: number): Promise<LocatagEntity[]> {
        return await this.locatagsRepository.find({
            where: [{ "id": _id }]
        });
    }

    async createLocatag(locatag: LocatagEntity){
        return await this.locatagsRepository.save(locatag);
    }

    async updateLocatag(locatag: LocatagEntity) {
        this.locatagsRepository.save(locatag)
    }

    async deleteLocatag(locatag: LocatagEntity) {
        this.locatagsRepository.delete(locatag);
    }

}
