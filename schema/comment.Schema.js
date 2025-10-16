import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  post: { type: Schema.Types.ObjectId, ref: "posts", required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const commentModel = mongoose.model("comments", commentSchema);
