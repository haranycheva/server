import { getAllPosts, rewriteJSON } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";

const editPost = async (req, res) => {
  const postId = req.params.id;
  const newPost = await Post.findByIdAndUpdate(postId, { ...req.body });
  if (!newPost) {
    throw HttpError(400, `Can not find a post with id ${postId}`);
  }
  // const { title, body } = req.body;
  // const postsArr = await getAllPosts();
  // if(!getAllPosts){
  //   throw HttpError(400, `Server error`)
  // }
  // const idx = postsArr.findIndex((post) => post.id === postId);
  // if (idx === -1) {
  //   throw HttpError(400, `Can not find a post with id ${postId}`);
  // }
  // postsArr[idx] = { ...postsArr[idx], title, body };
  // await rewriteJSON(postsArr);
  res.json(newPost);
};

export default editPost;
