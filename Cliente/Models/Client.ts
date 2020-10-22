//const mongoose = require("mongoose");
import { IClient } from '../Contracts/ICliente';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    email: {
        type: String,
        validate: function (email: String) { const len = email.match(/@/g); return len ? len.length == 1 : false; },
        required: true
    },
    phone: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true,
    },
    name: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true,
    },
    endereco: {
        type: String, 
        validate: function (endereco: String) { if(endereco == null || endereco.length == 0){ return false }},
        required: true,
    },
    codClient: {
        type: String
    }
});


const Client = mongoose.model<IClient, Object>("cliente", ClientSchema)

export default Client;