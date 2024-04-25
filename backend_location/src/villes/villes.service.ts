import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VilleEntity } from './ville.entity/ville.entity';

@Injectable()
export class VillesService {
    constructor(@InjectRepository(VilleEntity) private villesRepository: Repository<VilleEntity>) { }

    async getVilles(): Promise<VilleEntity[]> {
        return await this.villesRepository.find({
            relations: ["location", "region"]
        });
    }

    async getVille(_id: number): Promise<VilleEntity[]> {
        return await this.villesRepository.find({
            where: [{ "id": _id }],
            relations: ["location", "region"]
        });
    }

    async createVille(ville: VilleEntity){
        return await this.villesRepository.save(ville);
    }

    async updateVille(ville: VilleEntity) {
        this.villesRepository.save(ville)
    }

    async deleteVille(ville: VilleEntity) {
        this.villesRepository.delete(ville);
    }

}
