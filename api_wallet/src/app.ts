process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

// Env files
import dotenv = require('dotenv');
dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

import express = require('express');

const app: express.Application = express();
app.use(express.json());

export { app };