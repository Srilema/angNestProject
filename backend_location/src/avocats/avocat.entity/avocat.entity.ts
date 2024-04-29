
import { PhotoEntity } from "src/photos/photo.entity/photo.entity";
import { UtilisateurEntity } from "src/utilisateurs/utilisateur.entity/utilisateur.entity";
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class AvocatEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name:string;

    @Column('decimal', { precision: 6, scale: 2 })
    price: number;


    @Column({ length: 250 })
    description:string;

    //@ManyToOne(()=> UtilisateurEntity,(utilisateur)=>utilisateur.avocats)
    //utilisateur: UtilisateurEntity
}
