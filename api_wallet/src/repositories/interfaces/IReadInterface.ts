export interface IRead {
    find(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}