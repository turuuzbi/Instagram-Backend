import { postModel } from "../../schema/post.Schema.js";

export const deletePost = async (req, res) => {
  const { postId } = req.body;
  const deletedPost = await postModel.findByIdAndDelete(postId);
  res.status(200).json(deletedPost);
};
