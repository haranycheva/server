import {HttpError, createToken} from "../../helpers/index.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs"

const signin = async (req, res, next) => {
  const {email, password } = req.body;
  const user = await User.findOne({  email });
  if(!user){
    throw HttpError(409, "Email or password are invalid")
  }
  const comparePassword = bcrypt.compare(password, user.password)
  if(!comparePassword){
    throw HttpError(409, "Email or password are invalid")
  }
  const token = createToken(user)
  await User.findByIdAndUpdate(user._id, {token})
  res.json({token, user: {
    email,
    id: user._id,
  }})
};

export default signin