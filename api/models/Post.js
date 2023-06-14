const mongoose = require("mongoose");

const { Schema } = mongoose;

const { userSchema } = new Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },

    user: {
        type: [userSchema],
    }
    
},

{ timestamps: true},

);

const Post = mongoose.model("Post", postSchema);

module.exports = Post