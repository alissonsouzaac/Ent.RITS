import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    nid: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },
    fullName: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },
    phone: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },
    email: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },
    id: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    },
    password: {
        type: String,
        validate: function (name: String) { if(name == null || name.length == 0){ return false }},
        required: true
    }
})

const admin = mongoose.model('Admin', AdminSchema)


export default admin;