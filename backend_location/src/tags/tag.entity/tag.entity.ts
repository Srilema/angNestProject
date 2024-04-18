import { LocationEntity } from 'src/locations/location.entity/location.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';


@Entity()
export class TagEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    type:string;

    @ManyToOne(()=> LocatagEntity,(locatag)=>locatag.tags)
    tags: TagEntity[]
}
