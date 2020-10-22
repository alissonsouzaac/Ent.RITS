//const mongoose = require("mongoose");
import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PedidoSchema = new Schema({
  
   
    codClient: {
        type: Object,
       
    },

    codProd: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },

    dataCria: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },

    status: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    }

}) 

const pedido = mongoose.model('pedido', PedidoSchema)

export default pedido;