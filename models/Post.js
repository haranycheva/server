import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    // email: {
    //   type: String,
    //   match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    // },
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    // actual: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  { versionKey: false, timestamps: true }
);
postSchema.post("save", handleSaveError)
postSchema.pre("findOneAndUpdate", preUpdate)
postSchema.post("findOneAndUpdate", handleSaveError)
export const Post = model("post", postSchema);
