import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UtilisateurEntity } from './utilisateur.entity/utilisateur.entity';

@Injectable()
export class UtilisateursService {
    constructor(@InjectRepository(UtilisateurEntity) private utilisateurRepository: Repository<UtilisateurEntity>) { }

    async getUtilisateurs(): Promise<UtilisateurEntity[]> {
        return await this.utilisateurRepository.find();
    }

    async getUtilisateur(_id: number): Promise<UtilisateurEntity> {
        return await this.utilisateurRepository.findOne({
            where: {id: _id},
            relations: ["locations"]
        });
    }

     async createUtilisateur(utilisateur: UtilisateurEntity) {
        return await this.utilisateurRepository.save(utilisateur)
    }


    async updateUtilisateur(utilisateur: UtilisateurEntity) {
        return await this.utilisateurRepository.update(utilisateur.id, utilisateur);
    }

    async deleteUtilisateur(utilisateur: UtilisateurEntity) {
        return await this.utilisateurRepository.delete(utilisateur);
    }
}
