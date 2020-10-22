import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ProdutoSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    preco: {
        type: String,
        required: true
    },

    cod: {
        type: Object,
        required: true
    }

}) 

const produto = mongoose.model('produto', ProdutoSchema)

export default produto;