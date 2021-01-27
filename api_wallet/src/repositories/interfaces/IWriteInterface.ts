export interface IWrite {
    create(item: any): Promise<any>;
    update(item: any): Promise<any>;
    delete(id: string): Promise<any>;
}