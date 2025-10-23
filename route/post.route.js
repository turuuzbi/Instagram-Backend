import express from "express";
import { generatePost } from "../controller/post/generatePost.js";
import { getUserPosts } from "../controller/post/getuserposts.js";
import { getPosts } from "../controller/post/getposts.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { toggleLike } from "../controller/post/toggleLike.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/user/:userId", authMiddleware, getUserPosts);
postRouter.delete("/delete"), authMiddleware, 
postRouter.post("/generate", authMiddleware, generatePost);
postRouter.post("/toggleLike/:postId", authMiddleware, toggleLike);

export default postRouter;
