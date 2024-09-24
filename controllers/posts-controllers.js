import { ctrlWrapper } from "../decorators/index.js";
import { addPost, deletePost, editPost, getPostById, getPosts } from "./posts/index.js";

export default {
  getPosts: ctrlWrapper(getPosts),
  getPostById: ctrlWrapper(getPostById),
  addPost: ctrlWrapper(addPost),
  editPost: ctrlWrapper(editPost),
  deletePost: ctrlWrapper(deletePost)
};
