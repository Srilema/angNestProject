import { VilleEntity } from 'src/villes/ville.entity/ville.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class RegionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    num_dep:number

    @Column({ length: 250 })
    name:string;

    @OneToOne(()=>VilleEntity, (ville)=>ville.region)
    ville: VilleEntity
}
