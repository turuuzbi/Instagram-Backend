import { commentModel } from "../../schema/comment.Schema.js";

export const deleteComment = async (req, res) => {
  const { commentId } = req.body;
  const deletedComment = await commentModel.findByIdAndDelete(commentId);
  res.status(200).json(deletedComment);
};
