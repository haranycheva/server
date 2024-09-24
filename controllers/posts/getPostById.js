import { getAllPosts } from "../../helpers/index.js";
import { Post } from "../../models/Post.js";

const getPostById = async (req, res) => {
    const postId = req.params.id;
    // const postsArr = await getAllPosts();
    const result = await Post.findById(postId)
    // const result = postsArr.find((post) => post.id === postId);
    // if (!result) {
    //   throw HttpError(400, `Can not find a post with id ${postId}`);
    // }
    res.json(result);
  };

  export default getPostById
