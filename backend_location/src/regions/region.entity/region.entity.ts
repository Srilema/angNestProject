import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    num_dep:number

    @Column({ length: 250 })
    name:string;

}
