import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) res.status(400).json({ message: "need auth header" });

  const accesstoken = authHeader.split(" ")[1];
  if (!accesstoken) res.status(400).json({ message: "need auth token" });

  const user = jwt.verify(accesstoken.trim(), process.env.JWT_SECRET);

  if (!user) res.status(400).json({ message: "need to sign in" });

  req.user = user.data;

  next();
};
