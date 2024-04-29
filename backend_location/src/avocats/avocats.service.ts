import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvocatEntity } from './avocat.entity/avocat.entity';

@Injectable()
export class AvocatsService {
    constructor(@InjectRepository(AvocatEntity) private avocatsRepository: Repository<AvocatEntity>) { }

    async getAvocats(): Promise<AvocatEntity[]> {
        return await this.avocatsRepository.find({
            
        });
    }

    async getAvocat(_id: number): Promise<AvocatEntity[]> {
        return await this.avocatsRepository.find({
            where: [{ "id": _id }],
            
        });
    }

    async createAvocat(avocat: AvocatEntity){
        return await this.avocatsRepository.save(avocat);
    }

    async updateAvocat(avocat: AvocatEntity) {
        this.avocatsRepository.save(avocat)
    }

    async deleteAvocat(avocat: AvocatEntity) {
        this.avocatsRepository.delete(avocat);
    }

}
