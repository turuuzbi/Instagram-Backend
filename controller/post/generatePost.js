import { postModel } from "../../schema/post.Schema.js";

export const generatePost = async (request, response) => {
  const user = request.user;
  const { images, caption } = request.body;
  const newPost = await postModel.create({
    user: user._id,
    images,
    caption, 
  });
  response.status(200).json({ newPost });
};
