import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getComments } from "../controller/comment/getcomments.js";
import { createComment } from "../controller/comment/createcomments.js";

const commentRouter = express.Router();

commentRouter.get("/get/:postId", authMiddleware, getComments);
commentRouter.post("/create", authMiddleware, createComment);

export default commentRouter;
