import { LoueurEntity } from "src/loueurs/loueur.entity/loueur.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class UtilisateurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    mail: string;

    @Column({ length : 50 })
    mdp : string;

    @OneToOne(()=>LoueurEntity, (loueur)=> loueur.utilisateur)
    loueur: LoueurEntity;
}