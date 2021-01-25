import { app } from './app';
import "reflect-metadata";
import { createConnection } from 'typeorm';

//database connection
createConnection().then(async connection => { 
    console.log(">>> Mysql connection with TypeORM <<<"); 
  }).catch(error => console.log(error));
// server connection
app.listen(process.env.PORT, () => {
    console.log(`>>> Server running at port: ${process.env.PORT} <<<`);    
});