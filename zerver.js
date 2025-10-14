import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import userRouter from "./route/user.route.js";
import postRouter from "./route/post.route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5555;

const connectionToDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

connectionToDB();

app.use("/", userRouter);
app.use("/post", postRouter);

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
