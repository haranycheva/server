import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  const pass = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: pass });
  res.status(201).json({
    user: {
      email,
      id: newUser._id,
      username: newUser.username,
    },
  });
};

export default signup;
