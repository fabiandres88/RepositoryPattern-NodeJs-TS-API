import { SubscriptionRepository } from '../repositories/SubscriptionRepository';

export class SubscriptionServices {

    constructor(
        private readonly SubscritionRepository: SubscriptionRepository
    ) {}

    public async create(body: any): Promise<any> {
        const response= await this.SubscritionRepository.create(body);
        const toSave = await this.SubscritionRepository.save(response);
        return toSave;
    }

    public async update(id: string, body: any): Promise<any> {
        const response = await this.SubscritionRepository.findOne(id);
        const result = await this.SubscritionRepository.merge(response, body);
        const toSave = await this.SubscritionRepository.save(result);
        return toSave;
    }

    public async delete(id: string): Promise<any> {
        return await this.SubscritionRepository.delete(id);
    }

    public async find(): Promise<any[]> {
        return await this.SubscritionRepository.find();
    }

    public async findById(id: string): Promise<any> {
        return await this.SubscritionRepository.findOne(id);
    }
}