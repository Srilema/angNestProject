import { LocationEntity } from "src/locations/location.entity/location.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class UtilisateurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 3, nullable: false})
    civil: string;

    @Column({ length : 45, nullable: false})
    nom : string;

    @Column({length:50, nullable: false})
    role: string;

    @Column({length: 50, nullable: false})
    mail: string;

    @Column({length:15, nullable: false})
    tel : string;

    @Column({ length : 50, select: false, nullable: false })
    mdp : string;

    @OneToMany(()=> LocationEntity,(location)=>location.utilisateur)
    locations: LocationEntity[];
}
