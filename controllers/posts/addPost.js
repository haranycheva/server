import { nanoid } from "nanoid";
import { getAllPosts, HttpError, rewriteJSON } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";

const addPost = async (req, res) => {
  // const { title, body } = req.body;
  // const postsArr = await getAllPosts();
  // if(!getAllPosts){
  //   throw HttpError(400, `Server error`)
  // }
  const newPost = await Post.create({ ...req.body });

  // const newPost = { id: nanoid(), title, body };
  // postsArr.push(newPost);
  // await rewriteJSON(postsArr);
  res.json(newPost);
};

export default addPost;
