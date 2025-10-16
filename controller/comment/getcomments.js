import { commentModel } from "../../schema/comment.Schema.js";

export const getComments = async (req, res) => {
  const { postId } = req.params;
  const comments = await commentModel
    .find({ post: postId })
    .populate({
      path: "post",
      populate: { path: "user", select: "username profilePicture" },
    })
    .populate("user", "username profilePicture");

  res.status(200).json(comments);
};
