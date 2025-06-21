const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likePost = async(req,res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post,user,
        })
        const savedLike= await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes: savedLike._id}}, {new:true})
                            .populate("likes").exec();;

        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(400),json({
            success:false,
            data:response,
            message:"Getting bad request while creating liking the post"
        })
    }
}


exports.unLikePost = async(req,res) => {
    try{
        const {post, like} = req.body;
    
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like})

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull:{likes: deletedLike._id}},
                            {new:true}).exec();;

        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(400),json({
            success:false,
            data:response,
            message:"Getting bad request while creating liking the post"
        })
    }
}