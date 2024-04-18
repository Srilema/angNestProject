import { LoueurEntity } from "src/loueurs/loueur.entity/loueur.entity";
import { PhotoEntity } from "src/photos/photo.entity/photo.entity";
import { Entity,PrimaryGeneratedColumn,Column,OneToMany,ManyToOne } from "typeorm";

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

    @OneToMany(() => LoueurEntity, loueur => loueur.location)
    loueurs: LoueurEntity[];

    // photo => location
    //@ManyToOne(() => PhotoEntity, photo => photo.locations)
    //photo: PhotoEntity;
}
