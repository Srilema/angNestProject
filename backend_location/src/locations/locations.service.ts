import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationEntity } from './location.entity/location.entity';

@Injectable()
export class LocationsService {
    constructor(@InjectRepository(LocationEntity) private locationsRepository: Repository<LocationEntity>) { }

    async getLocations(): Promise<LocationEntity[]> {
        return await this.locationsRepository.find();
    }

    async getLocation(_id: number): Promise<LocationEntity[]> {
        return await this.locationsRepository.find({
            where: [{ "id": _id }],
            relations:["locatag"]
        });
    }

    async createLocation(location: LocationEntity){
        return await this.locationsRepository.save(location);
    }

    async updateLocation(location: LocationEntity) {
        this.locationsRepository.save(location)
    }

    async deleteLocation(location: LocationEntity) {
        this.locationsRepository.delete(location);
    }

}
