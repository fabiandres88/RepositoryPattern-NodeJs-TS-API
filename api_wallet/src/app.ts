import express = require('express');

const app: express.Application = express();
app.use(express.json())

export { app };