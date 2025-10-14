import express from "express";
import { getUser } from "../controller/user/getuser.js";
import { login } from "../controller/user/login.js";
import { signup } from "../controller/user/signup.js";
import { toggleFollow } from "../controller/user/follow.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.get("/user/:userId", authMiddleware, getUser);
userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/toggleFollow/:followedUserId", authMiddleware, toggleFollow);

export default userRouter;
