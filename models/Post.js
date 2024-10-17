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
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    postAvatar: {
      type: String,
      default: ""
    }
  },
  { versionKey: false, timestamps: true }
);
postSchema.post("save", handleSaveError);
postSchema.pre("findOneAndUpdate", preUpdate);
postSchema.post("findOneAndUpdate", handleSaveError);
export const Post = model("post", postSchema);
