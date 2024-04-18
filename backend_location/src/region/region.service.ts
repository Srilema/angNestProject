import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionEntity } from '../regions/region.entity/region.entity';

@Injectable()
export class RegionService {

    constructor(@InjectRepository(RegionEntity) private regionRepository: Repository<RegionEntity>) { }

    async getRegions(): Promise<RegionEntity[]> {
        return await this.regionRepository.find();
    }

    async getRegion(_id: number): Promise<RegionEntity> {
        return await this.regionRepository.find({
            where: [{ "id": _id }]
        })[0];
    }

     async createRegion(region: RegionEntity) {
        this.regionRepository.save(region)
    }


    async updateRegion(region: RegionEntity) {
        this.regionRepository.save(region)
    }

    async deleteRegion(region: RegionEntity) {
        this.regionRepository.delete(region);
    }
}

