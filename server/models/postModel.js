// which define our model structure
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Post", postSchema)