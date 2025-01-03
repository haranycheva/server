import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";
const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const userSchema = new Schema(
  {
    username: {
      type: String,
      minLength: 1,
      maxLength: 32,
      required: [true, "username is required"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "password is required"],
    },
    email: {
      type: String,
      match: emailReg,
      unique: true,
      required: [true, "email is required"],
    },
    token: {
      type: String,
      default: "",
    },
    verification: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String,
      default: ""
    }
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleSaveError);
userSchema.pre("findOneAndUpdate", preUpdate);
userSchema.post("findOneAndUpdate", handleSaveError);
export const User = model("user", userSchema);
