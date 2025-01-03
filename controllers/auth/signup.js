import {createVerificationToken, sendMessage} from "../../helpers/index.js";
import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  const pass = await bcrypt.hash(password, 10);
  const verificationToken = createVerificationToken() 
  const newUser = await User.create({ username, email, verificationToken, password: pass });
  if(!newUser){
    throw HttpError(500, "Can not create user");
  }
  const message = await sendMessage(newUser)
  if(!message){
    throw HttpError(500, "Can not send verification message");
  }
  res.status(201).json({
    user: {
      email,
      id: newUser._id,
      username: newUser.username,
      verificationToken
    },
  });
};

export default signup;
