import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  like: [{ type: Schema.Types.ObjectId, required: true }],
  images: { type: [{ type: String }], required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  // comment: { type: Schema.Types.ObjectId },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const postModel = mongoose.model("posts", postSchema);
