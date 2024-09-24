import { getAllPosts, HttpError, rewriteJSON } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findByIdAndDelete(postId)
  
  if(!post){
    throw HttpError(400, `Can not find a post with id ${postId}`)
  }
  // const postsArr = await getAllPosts();
  // if (!getAllPosts) {
  //   throw HttpError(400, `Server error`);
  // }
  // const idx = postsArr.findIndex((post) => post.id === postId);
  // if (idx === -1) {
  //   throw HttpError(400, `Can not find a post with id ${postId}`);
  // }
  // const [result] = postsArr.splice(idx, 1);
  // await rewriteJSON(postsArr);
  res.json({post, message: "delete success"});
};

export default deletePost;
