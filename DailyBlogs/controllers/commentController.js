const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComment = async(req,res) => {
    try{
        const {post, user, body} = req.body;
        const comment = new Comment({
            post,user,body
        })
        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments: savedComment._id}}, {new:true})
                        .populate("comments").exec();

        res.json({
            post:updatedPost
        })

    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(400),json({
            success:false,
            data:response,
            message:"Getting bad request while creating comment on the post"
        })
    }
}