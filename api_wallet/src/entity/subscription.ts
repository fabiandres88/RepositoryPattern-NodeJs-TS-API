import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("subscription", { schema: "public" })
export class Subscriptions {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    user_id!: number;

    @Column()
    code!: string;

    @Column()
    amount!: number;

    @Column()
    cron!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}