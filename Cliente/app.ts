import express from 'express';
import mongoose from 'mongoose';
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//const http = require('http');
//const debug = require('debug');
//import { Router } from 'express';
import ApplicationRoutes from './Routes/Route';
import { IRoute } from "./Contracts/IRoute";
//const ApplicationRoutes = require('./Routes/Route');

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


app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', routes.getRoutes());



app.listen(9000, () => console.log('Server do cliente ativo na porta 9000'));

