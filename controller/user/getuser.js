import { userModel } from "../../schema/user.Schema.js";

export const getUser = async (req, res) => {
  const { userId } = req.params;
  const user = await userModel.findById(userId);
  res.status(200).json(user);
};
  