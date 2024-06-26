import { LocatagEntity } from "src/locatags/locatag.entity/locatag.entity";
import { PhotoEntity } from "src/photos/photo.entity/photo.entity";
import { UtilisateurEntity } from "src/utilisateurs/utilisateur.entity/utilisateur.entity";
import { VilleEntity } from "src/villes/ville.entity/ville.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class LocationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250, nullable: false })
    name:string;

    @Column('decimal', { precision: 6, scale: 2 },)
    price: number;

    @Column({ length: 250, nullable: false })
    adress:string;

    @Column({ length: 250, nullable: false })
    description:string;

    @ManyToOne(()=> UtilisateurEntity,(utilisateur)=>utilisateur.locations)
    utilisateur: UtilisateurEntity

    @ManyToOne(()=>LocatagEntity, (locatag)=>locatag.locations)
    locatag: LocatagEntity;

    @OneToMany(()=>PhotoEntity, (photos)=>photos.location)
    photos: PhotoEntity[]

    @ManyToOne(()=>VilleEntity, (ville)=>ville.location)
    ville: VilleEntity
}
