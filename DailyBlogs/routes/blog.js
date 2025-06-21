const express = require("express");
const router = express.Router();

const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController")
const {likePost, unLikePost} = require("../controllers/likeController");

router.post("/comments/create",createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unLikePost);

module.exports = router;