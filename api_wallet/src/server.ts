import { app } from './app';

app.get('/', (req, res) => {
    res.send('Running with ts-node-dev...')
})

app.listen(3000, () => {
    console.log("Server started at port 3000 ...");
    
});