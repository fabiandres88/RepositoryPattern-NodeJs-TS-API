import { Request, Response } from 'express';
import { JsonController, Get, Post, Put, Delete, Req, Res, Body, Param } from 'routing-controllers';
import { validate } from 'class-validator';
import { SubscriptionServices } from '../services/Subscription.Service';
import { SubscriptionRepository } from '../repositories/SubscriptionRepository';
import { Subscriptions } from '../entity/subscriptions.model';

@JsonController()
export class SubscriptionControllers {
    constructor(
        private readonly subscriptionServices: SubscriptionServices
    ){this.subscriptionServices= new SubscriptionServices(new SubscriptionRepository)}

    @Get('/subscriptions')
    public async get(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const subscriptions = await this.subscriptionServices.find();
            return res.status(200).json({ status: 200, data: subscriptions, message: 'Successfully subscriptions retrieved.' });
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).json({ status: 400, message: error.message });
        };
    }

    @Get('/subscriptions/:id')
    public async getById(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const subscription = await this.subscriptionServices.findById(req.params.id);            
            return res.status(200).json(subscription);
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).send();
        };
    };

    @Post('/subscriptions')
    public async postUser(@Body() subs: Subscriptions, @Req() req: Request, @Res() res: Response): Promise<Response> {        
        try {
            const subscription = await this.subscriptionServices.create(req.body);
            const validations = await validate(subscription);
            if (validations.length === 0) {
                return res.status(201).json(subscription);
            }
            return res.status(400).json(validations);
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).send();
        };
    };

    @Put('/subscriptions/:id')
    public async updateUser(@Param("id") id: string,  @Body() subs: any, @Req() req: Request, @Res() res: Response): Promise<Response> {
        try {            
            const subscription = await this.subscriptionServices.update(id, subs);
            // if (user) {
            // userServices.updateUserservice(user, req.body);
            //     const validations = await validate(user);
            //     if (validations.length === 0) {
            //         const response = await userServices.saveUserservice(user);
                    return res.status(200).json(subscription);
                // }
                // res.status(400).json(validations);
            // }
            // return res.status(404).json({ message: "User does not exit." });
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).send();
        };
    };

    @Delete('/subscriptions/:id')
    public async deleteUser(@Req() req: Request, @Res()res: Response): Promise<Response> {
        try {
            this.subscriptionServices.delete(req.params.id);
            return res.status(200).json({ message: "User deleted." });
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).send();
        };
    };
};