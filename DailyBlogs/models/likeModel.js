<<<<<<< HEAD
const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

=======
const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

>>>>>>> 31e40b3 (Initial commit)
module.exports = mongoose.model("Like",likeSchema);