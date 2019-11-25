const mongoose = require('../database/index');

const UserSchema = new mongoose.Schema({

    name: {
        type:String,
        require:true,
    },
    email: {
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
    password: {
        type: String,
        required:true,
        select:false,
    },

    CreatedAt:{
        type:Date
    }
});

const User = mongoose.model('User',UserSchema);//vai receber um schema inteiro

module.exports = User;
