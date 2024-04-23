
import { LocationEntity } from 'src/locations/location.entity/location.entity';
import { TagEntity } from 'src/tags/tag.entity/tag.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class LocatagEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_location: number;
    
    @Column()
    id_tag: number;

    @OneToMany(()=> TagEntity,(tag)=>tag.locatag)
    tags: TagEntity;

    @OneToMany(()=> LocationEntity,(location)=>location.locatag)
    locations: LocationEntity;
}
