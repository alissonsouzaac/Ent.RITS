//const mongoose = require("mongoose");
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ProdutoSchema = new Schema({
    name: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },

    preco: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },

    codProd: {
        type: String
    }

}) 

const pedido = mongoose.model('produto', ProdutoSchema)

export default pedido;