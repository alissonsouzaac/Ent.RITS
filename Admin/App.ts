//import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { IRoute } from "./Contracts/IRoute";
import ApplicationRoutes from './Routes/Route';
import BodyParser from 'body-parser';
//import Application from './Application/Application';

//dotenv.config();

//const app: Application = new Application();

//app.start();

const routes: IRoute = new ApplicationRoutes();
const app = express();
//const routes = Router();
//const notClient = require('./Routes/')


mongoose
  .connect('mongodb://localhost:27017/rits', {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log('Error ao conectar ao MongoDB');
    console.log(error);
  });

 // app.use('/', routes.getRoutes());


app.use(BodyParser.json());
app.use(express.json());
app.use(BodyParser.urlencoded({
    extended: false
}));

app.use('/', routes.getRoutes());



app.listen(9090, () => console.log('Server do Admin ativo na porta 9090'));