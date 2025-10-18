import { userModel } from "../../schema/user.Schema.js";

export const toggleFollow = async (req, res) => {
  const followedUserId = req.params.followedUserId;
  const followingUserId = req.user._id;

  const followingUser = await userModel.findById(followingUserId);
  const followedUser = await userModel.findById(followedUserId);

  if (followedUserId === followingUserId) {
    res.status(400).json({ message: "Can't follow yourself" });
  }

  const isFollowed = followedUser.followers.includes(followingUserId);

  if (isFollowed) {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: followingUser.following.filter(
        (id) => id.toString() !== followedUserId
      ),
    });

    await userModel.findByIdAndUpdate(followedUserId, {
      followers: followedUser.followers.filter(
        (id) => id.toString() !== followingUserId
      ),
    });
  } else {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: [...followingUser.following, followedUserId],
    });

    await userModel.findByIdAndUpdate(followedUserId, {
      followers: [...followedUser.followers, followingUserId],
    });
  }

  res.status(200).json({ message: "Successful!" });
};
