import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class LocationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name:string;

    @Column('decimal', { precision: 6, scale: 2 })
    price: number;

    @Column({ length: 250 })
    adress:string;

    @Column({ length: 250 })
    description:string;
}
