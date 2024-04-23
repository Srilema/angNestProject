import { LocatagEntity } from "src/locatags/locatag.entity/locatag.entity";
import { LoueurEntity } from "src/loueurs/loueur.entity/loueur.entity";
import { TagEntity } from "src/tags/tag.entity/tag.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";

@Entity()
export class LocationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name:string;

    @Column('decimal', { precision: 6, scale: 2 })
    price: number;

    @Column({ length: 250 })
    adress:string;

    @Column({ length: 250 })
    description:string;

    @ManyToOne(()=> LoueurEntity,(loueur)=>loueur.locations)
    loueur: LoueurEntity;

    @ManyToOne(()=> LocatagEntity,(locatag)=>locatag.locations)
    locatag: LocatagEntity;
}
