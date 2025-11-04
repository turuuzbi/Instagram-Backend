import express from "express";
import { generatePost } from "../controller/post/generatePost.js";
import { getUserPosts } from "../controller/post/getUserPosts.js";
import { getPosts } from "../controller/post/getPosts.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { toggleLike } from "../controller/post/toggleLike.js";
import { deletePost } from "../controller/post/deletePost.js";
import { editPost } from "../controller/post/editPost.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/user/:userId", authMiddleware, getUserPosts);
postRouter.post("/generate", authMiddleware, generatePost);
postRouter.post("/toggleLike/:postId", authMiddleware, toggleLike);
postRouter.delete("/delete", authMiddleware, deletePost);
postRouter.put("/edit", authMiddleware, editPost);

export default postRouter;
