import { getAllPosts } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";


const getPosts = async (_, res) => {
  // const result = await getAllPosts()
  const result = await Post.find()
  if(!result){
    throw HttpError(400, `Not found`)
  }
  res.json(result);
  }

  export default getPosts