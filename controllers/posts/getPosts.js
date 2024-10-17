import { getAllPosts } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";

const getPosts = async (_, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const totalPosts = await Post.countDocuments({owner})
  const result = await Post.find({ owner }, "", {
    skip: (page - 1) * limit,
    limit,
  });
  if (!result) {
    throw HttpError(400, `Not found`);
  }
  res.json({result: result, tottal: totalPosts});
};

export default getPosts;
