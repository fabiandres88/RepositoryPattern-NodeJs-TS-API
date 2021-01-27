import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { Balances } from './balances.model';
import { Movements } from './movements.model';
import { Subscriptions } from './subscriptions.model';

@Entity("users", { schema: "public"})
export class Users {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { name: "email", default: () => "''" })
    email: string;

    @Column("varchar", { name: "password", default: () => "''"})
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(type => Movements, movements => movements.user_id)
    movements: Movements[];

    @OneToMany(type => Subscriptions, subscriptions => subscriptions.user_id)
    subscriptions: Subscriptions[];

    @OneToMany(type => Balances, balances => balances.user_id)
    balances: Balances[];
}