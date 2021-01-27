import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("balances")
export class Balances {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    user_id: number;

    @Column()
    amount: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date
}