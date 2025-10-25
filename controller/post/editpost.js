import { postModel } from "../../schema/post.Schema.js";

export const editPost = async (req, res) => {
  const { caption, postId } = req.body;
  const editedPost = await postModel.findByIdAndUpdate(postId);
  res.status(200).json(editedPost);
};
