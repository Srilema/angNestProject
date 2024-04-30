import { LocationEntity } from 'src/locations/location.entity/location.entity';
import { RegionEntity } from 'src/regions/region.entity/region.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class VilleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name:string;

    @OneToMany(()=>LocationEntity, (location)=>location.ville)
    location: LocationEntity

    @ManyToOne(()=>RegionEntity, (region)=>region.ville)
    region: RegionEntity
}
