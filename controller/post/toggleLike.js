import { postModel } from "../../schema/post.Schema.js";

export const toggleLike = async (req, res) => {
  const userId = req.user._id;
  const postId = req.params.postId;
  const post = await postModel.findById(postId);
  const postLike = post.like;
  const isLiked = postLike.includes(userId);

  if (isLiked) {
    await postModel.findByIdAndUpdate(postId, {
      like: postLike.filter((likes) => likes.toString() !== userId),
    });
  } else {
    await postModel.findByIdAndUpdate(postId, {
      like: [...postLike, userId],
    });
  }
  res.status(200).json({ message: "Success!" });
};
