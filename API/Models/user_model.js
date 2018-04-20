const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    /*UID:{
        type:String,
        required:[true,"User ID is required"]

    },*/

    FirstName:{
        type:String,
        required:[true,"First name is required"]

    },
    LastName:{
        type:String,
        required:[true,"Last name is required"]

    },
    Email:{
        type:String,
        required:[true,"Email field is required"]
    },
    Password:{
        type:String,
        required:[true,"Password field is required"]

    }
});



const User = mongoose.model('User',userSchema);
module.exports = User;

