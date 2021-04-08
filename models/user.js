const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //username, string from 2 to 30 characters, required field
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        validate: {
            validator(v) {

            }
        }
    },
    //user information, string from 2 to 30 characters, required field
    about: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        validate: {
            validator(v) {
                
            }
        }
    },
    //link to the avatar, string, required field
    avatar: {
        type: String,
        required: true,
        validate: {
            //regex: /https?:\/\/[www.]?[-a-z0-9]{2,24}[/-a-z0-9_.#@]+/i
            validator(v) {

            },
            message: 'something...'
        }
    }
})

module.exports = mongoose.model('user', userSchema);