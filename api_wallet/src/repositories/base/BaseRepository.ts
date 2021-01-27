import { IWrite } from '../interfaces/IWriteInterface';
import { IRead } from '../interfaces/IReadInterface';

export abstract class BaseRepository implements IWrite, IRead {

    abstract create(item: any): Promise<any>;
    abstract update(item: any): Promise<any>;
    abstract delete(id: string): Promise<any>;
    abstract find(): Promise<any[]>;
    abstract findOne(id: string): Promise<any>;
}