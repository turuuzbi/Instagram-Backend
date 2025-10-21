import express from "express";
import { getUser } from "../controller/user/getuser.js";
import { login } from "../controller/user/login.js";
import { signup } from "../controller/user/signup.js";
import { toggleFollow } from "../controller/user/follow.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getSearchUser } from "../controller/user/getUsers.js";

const userRouter = express.Router();

userRouter.get("/user/:userId", authMiddleware, getUser);
userRouter.get("/searchUsers/:searchParams", authMiddleware, getSearchUser);
userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/toggleFollow/:followedUserId", authMiddleware, toggleFollow);

export default userRouter;
