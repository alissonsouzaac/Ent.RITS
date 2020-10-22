import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const PedidoSchema = new Schema({
   nome: {
       type: String,
       required: true
   },
   
    codClient: {
        type: String,
        required: true
    },

    codProd: {
        type: String,
        required: true
    },

    dataCria: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    }

}) 

const pedido = mongoose.model('pedido', PedidoSchema)

export default pedido;