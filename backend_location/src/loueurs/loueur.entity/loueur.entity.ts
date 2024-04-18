import { UtilisateurEntity } from "src/utilisateurs/utilisateur.entity/utilisateur.entity";
import { LocationEntity } from "src/locations/location.entity/location.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from "typeorm";

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

    @ManyToOne(() => LocationEntity, location => location.loueurs)
    location: LocationEntity; 


}
