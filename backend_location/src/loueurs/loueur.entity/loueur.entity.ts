import { UtilisateurEntity } from "src/utilisateurs/utilisateur.entity/utilisateur.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class LoueurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 3})
    civil: string;

    @Column({ length : 45 })
    nom : string;

    @Column({length: 50})
    mail: string;

    @Column({length:15})
    tel : string;

    @OneToOne(()=>UtilisateurEntity, (utilisateur)=> utilisateur.loueur)
    utilisateur: UtilisateurEntity;
}
