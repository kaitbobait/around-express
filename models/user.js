const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //username, string from 2 to 30 characters, required field
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        validator: {
            
        }
    },
    //user information, string from 2 to 30 characters, required field
    about: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        validator: {
            
        }
    },
    //link to the avatar, string, required field
    avatar: {
        type: String,
        required: true,
        validator: {

        }
    }
})

module.exports = mongoose.model('user', userSchema);