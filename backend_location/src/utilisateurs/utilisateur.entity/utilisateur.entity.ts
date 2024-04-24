import { LocationEntity } from "src/locations/location.entity/location.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class UtilisateurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 3})
    civil: string;

    @Column({ length : 45 })
    nom : string;

    @Column({length:50})
    role: string;

    @Column({length: 50})
    mail: string;

    @Column({length:15})
    tel : string;

    @Column({ length : 50 })
    mdp : string;

    @OneToMany(()=> LocationEntity,(location)=>location.utilisateur)
    locations: LocationEntity[];
}
