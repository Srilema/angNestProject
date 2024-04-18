import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegionEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number : number;

    @Column({ length: 45 })
    name:string;
}

