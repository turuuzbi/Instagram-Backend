import { postModel } from "../../schema/post.Schema.js";

export const getUserPosts = async (request, response) => {
  const { userId } = request.params;
  const userPosts = await postModel.find({ user: userId });
  response.status(200).json(userPosts);
};
