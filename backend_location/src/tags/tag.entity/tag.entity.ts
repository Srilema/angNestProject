import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TagEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    type:string;
}
