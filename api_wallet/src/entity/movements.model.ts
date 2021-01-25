import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("movements", { schema: "public" })
export class Movements {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    user_id!: number;

    @Column()
    type!: boolean;

    @Column()
    amount!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}