/**
 * Created by Shashank on 5/4/2017.
 */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { task } from './routes';
import { UserController } from './controllers';

let app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Method', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET , PUT , POST , PATCH , DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
        res.status(200);
        res.end();
        return;
    }
    next();
});

app.post('/api/login',  (req, res) => {
    UserController.login(req,res);
});
app.use('/api/v1' , task);


app.listen(3000,  () => {
    console.log(`Express app listening on port 3000 !`);
});

