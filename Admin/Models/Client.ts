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
    nome: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true,
    },
    endereco: {
        type: String, 
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true,
    },
    codClient: {
        type: String
    }
});

const Client = mongoose.model('cliente', ClientSchema)

export default Client;