process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

// Env files
import dotenv = require('dotenv');
dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

import express = require('express');
import morgan from 'morgan';
import { createExpressServer } from 'routing-controllers';
import { resolve } from 'path';
import  bodyParser = require ('body-parser');
    
const app: express.Application = createExpressServer({
    defaultErrorHandler: false,
    classTransformer: true,
    validation: {
        validationError: {
            target: false
        }
    },
    controllers: [resolve(__dirname, "./controllers/**/*{.ts,.js}")]
});
app.use(bodyParser.json());
app.use(morgan('dev'));

export { app };