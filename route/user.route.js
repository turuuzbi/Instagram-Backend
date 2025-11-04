import express from "express";
import { getUser } from "../controller/User/getUser.js";
import { login } from "../controller/User/logIn.js";
import { signup } from "../controller/User/signUp.js";
import { toggleFollow } from "../controller/User/follow.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getSearchUser } from "../controller/User/searchUsers.js";

const userRouter = express.Router();

userRouter.get("/user/:userId", authMiddleware, getUser);
userRouter.get("/searchUsers/:searchParams", authMiddleware, getSearchUser);
userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/toggleFollow/:followedUserId", authMiddleware, toggleFollow);

export default userRouter;
