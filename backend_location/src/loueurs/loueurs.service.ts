import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoueurEntity } from './loueur.entity/loueur.entity';


@Injectable()
export class LoueursService {
    constructor(@InjectRepository(LoueurEntity) private loueurRepository: Repository<LoueurEntity>) { }

    async getLoueurs(): Promise<LoueurEntity[]> {
        return await this.loueurRepository.find();
    }

    async getLoueur(_id: number): Promise<LoueurEntity> {
        return await this.loueurRepository.findOne({
            where: {id: _id},
        });
    }

     async createLoueur(loueur: LoueurEntity) {
        return await this.loueurRepository.save(loueur)
    }


    async updateLoueur(loueur: LoueurEntity) {
        return await this.loueurRepository.update(loueur.id, loueur);
    }

    async deleteLoueur(loueur: LoueurEntity) {
        return await this.loueurRepository.delete(loueur);
    }
}
