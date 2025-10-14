import { hash } from "bcrypt";
import { userModel } from "../../schema/user.Schema.js";
import jwt from "jsonwebtoken";

export const signup = async (request, response) => {
  const data = request.body;
  const { username, email, password } = data;

  const saltedRound = 10;
  const hashedPass = await hash(password, saltedRound);

  const isExisting = await userModel.findOne({ email });

  if (isExisting) {
    response.status(400).json({ message: "User already exists" });
  } else {
    const newUser = await userModel.create({
      email: email,
      password: hashedPass,
      username: username,
    });

    const accessToken = jwt.sign(
      {
        data: newUser,
      },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );

    response.status(200).json({ accessToken });
  }
};
