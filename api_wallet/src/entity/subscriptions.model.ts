import { IsInt, Length, Max, Min, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: "subscriptions"})
export class Subscriptions {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    user_id: number;

    @Column()
    @Length(3,30)
    code: string;

    @Column()
    @IsInt()
    @Min(100)
    @Max(1000000)
    amount: number;

    @Column()
    @MaxLength(60)
    cron: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}