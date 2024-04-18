import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgenceEntity } from './agence.entity/agence.entity';

@Injectable()
export class AgencesService {
    constructor(@InjectRepository(AgenceEntity) private agencesRepository: Repository<AgenceEntity>) { }

    async getAgences(): Promise<AgenceEntity[]> {
        return await this.agencesRepository.find();
    }

    async getAgence(_id: number): Promise<AgenceEntity[]> {
        return await this.agencesRepository.find({
            where: [{ "id": _id }]
        });
    }

    async createAgence(agence: AgenceEntity){
        return await this.agencesRepository.save(agence);
    }

    async updateAgence(agence: AgenceEntity) {
        this.agencesRepository.save(agence)
    }

    async deleteAgence(agence: AgenceEntity) {
        this.agencesRepository.delete(agence);
    }

}
