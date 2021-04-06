const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        validator: {
            
        }
    },
    link: {
        type: String,
        required: true,
        link: empty,
        validator: {
            
        }

    },
    //link to card author's model, objectId type
    owner: {
        required: true,
    },
    // list of users who liked the post, objectId array, empty array by default(default field)
    likes: {

    },
    //creation date, Date type, default value Date.now
    createdAt: {
        type: Date,
    }
})

module.exports = mongoose.model('card', userSchema);