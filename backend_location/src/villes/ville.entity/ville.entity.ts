import { LocationEntity } from 'src/locations/location.entity/location.entity';
import { RegionEntity } from 'src/regions/region.entity/region.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class VilleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name:string;

    @OneToOne(()=>LocationEntity, (location)=>location.ville)
    location: LocationEntity

    @OneToOne(()=>RegionEntity, (region)=>region.ville)
    region: RegionEntity
}
