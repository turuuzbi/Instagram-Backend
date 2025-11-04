import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createComment } from "../controller/comment/createComment.js";
import { deleteComment } from "../controller/comment/deleteComment.js";
import { getComments } from "../controller/comment/getComments.js";

const commentRouter = express.Router();

commentRouter.get("/get/:postId", authMiddleware, getComments);
commentRouter.post("/create", authMiddleware, createComment);
commentRouter.delete("/delete", authMiddleware, deleteComment);

export default commentRouter;
