import { LocationEntity } from 'src/locations/location.entity/location.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PhotoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('longtext')
    image: string;

    @ManyToOne(()=>LocationEntity, (location)=>location.photos)
    location: LocationEntity
}
