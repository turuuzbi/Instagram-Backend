import { commentModel } from "../../schema/comment.Schema.js";

export const createComment = async (req, res) => {
  const { postId, comment } = req.body; // req deeree postId gej bichn post bish
  const userId = req.user;
  const comments = await commentModel.create({
    comment: comment,
    user: userId,
    post: postId,
  });
  res.status(200).json(comments);
};
