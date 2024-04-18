
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LocatagEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_location: number;
    
    @Column()
    id_tag: number;
}
