import { postModel } from "../../schema/post.Schema.js";

export const getPosts = async (_request, response) => {
  const posts = await postModel.find().populate("user");
  response.status(200).json(posts);
};
