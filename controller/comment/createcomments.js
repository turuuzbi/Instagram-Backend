import { commentModel } from "../../schema/comment.Schema.js";

export const createComment = async (req, res) => {
  const { postId, comment } = req.body;
  const userId = req.user;
  const comments = await commentModel.create({
    post: postId,
    user: userId,
    comment: comment,
  });
  res.status(200).json(comments);
};
