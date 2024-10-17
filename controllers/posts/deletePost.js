import { getAllPosts, HttpError, rewriteJSON } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findByIdAndDelete(postId)
  
  if(!post){
    throw HttpError(400, `Can not find a post with id ${postId}`)
  }
  res.json({post, message: "delete success"});
};

export default deletePost;
