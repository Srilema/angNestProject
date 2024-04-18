import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhotoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('longtext')
    image: string;
}
