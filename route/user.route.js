import express from "express";
import { getUser } from "../controller/user/getUser.js";
import { login } from "../controller/user/logIn.js";
import { signup } from "../controller/user/signUp.js";
import { toggleFollow } from "../controller/user/follow.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getSearchUser } from "../controller/user/searchUsers.js";

const userRouter = express.Router();

userRouter.get("/user/:userId", authMiddleware, getUser);
userRouter.get("/searchUsers/:searchParams", authMiddleware, getSearchUser);
userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/toggleFollow/:followedUserId", authMiddleware, toggleFollow);

export default userRouter;
