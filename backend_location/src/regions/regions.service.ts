import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionEntity } from './region.entity/region.entity';

@Injectable()
export class RegionsService {
    constructor(@InjectRepository(RegionEntity) private regionsRepository: Repository<RegionEntity>) { }

    async getRegions(): Promise<RegionEntity[]> {
        return await this.regionsRepository.find();
    }

    async getRegion(_id: number): Promise<RegionEntity[]> {
        return await this.regionsRepository.find({
            where: [{ "id": _id }]
        });
    }

    async createRegion(region: RegionEntity){
        return await this.regionsRepository.save(region);
    }

    async updateRegion(region: RegionEntity) {
        this.regionsRepository.save(region)
    }

    async deleteRegion(region: RegionEntity) {
        this.regionsRepository.delete(region);
    }

}
