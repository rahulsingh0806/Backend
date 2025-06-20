<<<<<<< HEAD
const mongoose = require("mongoose");
require("dotenv").config();

const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

=======
const mongoose = require("mongoose");
require("dotenv").config();

const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

>>>>>>> 31e40b3 (Initial commit)
module.exports = mongoose.model("Comment",commentSchema);