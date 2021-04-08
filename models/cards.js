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
        link: "",
        validator: {
            
        }

    },
    //link to card author's model, objectId type
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user' //card author's model?
    },
    // list of users who liked the post, objectId array, empty array by default(default field)
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            default: [],
            ref: 'user'
        }
    ],
    //creation date, Date type, default value Date.now
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('card', cardsSchema);