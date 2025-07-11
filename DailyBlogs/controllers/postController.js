const Post = require("../models/postModel");

exports.createPost = async(req,res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body
        })

        const savedPost = await post.save();

        res.json({
            post:savedPost
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            messgae:"Facing bad request while creating post"
        })
    }
}

exports.getAllPosts = async(req,res) => {
    try{
        // const posts = await Post.find().populate("likes").populate("comments").exec();
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            messgae:"Facing bad request while fetching all post"
        })
    }
}