import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VilleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name:string;

}
