import { getAllPosts, HttpError } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";

const getPostById = async (req, res) => {
  const { _id: owner } = req.user;
  const postId = req.params.id;
  const result = await Post.findOne({_id: postId, owner}).populate("owner", "-password");
  if(!result){
    throw HttpError(404, `Can not find post with id = ${postId}`)
  }
  res.json(result);
};

export default getPostById;
