import { userModel } from "../../schema/user.Schema.js";

export const getSearchUser = async (req, res) => {
  const searchParams = req.params.searchParams;
  const user = await userModel.find({
    username: new RegExp(searchParams, "i"),
  });
  res.status(200).json(user);
};
