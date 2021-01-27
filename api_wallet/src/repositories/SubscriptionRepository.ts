import { BaseRepository } from './base/BaseRepository';
import { Subscriptions } from '../entity/subscriptions.model';
import { getRepository } from 'typeorm';

export class SubscriptionRepository extends BaseRepository {

    public async create(item: any): Promise<any> {
        try {
            const result = getRepository(Subscriptions).create(item);
            return result
        }
        catch (error) {
            throw new Error('Method not implemented.');
        }
    }

    public async update(item: any): Promise<any> {
        try {
            const response = await getRepository(Subscriptions).findOne(item);            
            return response
        }
        catch (error) {
            throw new Error('Method not implemented.');
        }
    }

    public async delete(id: string): Promise<any> {
        try {
            const response = await getRepository(Subscriptions).delete(id);
            return response;
        }
        catch (erro) {
            throw new Error('Method not implemented.');
        }
    }

    public async find(): Promise<any[]> {
        try {
            const response = await getRepository(Subscriptions).find();
            return response;
        }
        catch (error) {
            throw new Error('Method not implemented.');
        }
    }

    public async findOne(id: string): Promise<any> {
        try {
            const response = await getRepository(Subscriptions).findOne(id);
            return response;
        }
        catch (error) {
            throw new Error('Method not implemented.');
        }
    }

    public async save(item: any): Promise<any> {
        try {
            const response = await getRepository(Subscriptions).save(item);
            return response;
        }
        catch (error) {
            throw new Error('Method not implemented.');
        }
    }

    public async merge(item: any, body: any): Promise<any> {
        try {
            const response = getRepository(Subscriptions).merge(item, body);
            return response;
        }
        catch (error) {
            throw new Error('Method not implemented.');
        }
    }
}