const mongoose = require("mongoose");
require("dotenv").config()

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],
    createdAt:{
        required:true,
        type:Date,
        default:Date.now()
    }   
})
module.exports = mongoose.model("Post",postSchema);