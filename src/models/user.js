const mongoose = require('../database/index');
const bcrypt = require('bcryptjs')
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
        type:Date,
        required: true, 
        default: Date.now
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password= hash;
})


const User = mongoose.model('User',UserSchema);//vai receber um schema inteiro

module.exports = User;
