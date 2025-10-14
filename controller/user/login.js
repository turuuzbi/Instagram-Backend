import { compare } from "bcrypt";
import { userModel } from "../../schema/user.Schema.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "incorrect password" });
  }

  const accessToken = jwt.sign(
    {
      data: user,
    },
    process.env.JWT_SECRET,
    { expiresIn: "5h" }
  );

  res.json(accessToken);
};
