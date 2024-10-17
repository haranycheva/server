import { Post } from "../../models/Post.js";
import fs from 'fs/promises'
import path from 'path'
import {cloudinary} from "../../helpers/index.js";

const addPost = async (req, res) => {
  const {_id : owner} = req.user

  // const posterPath = path.resolve("public", "posts")
  // const newPath = path.resolve(posterPath, filename)
  if(req.file){
    const {secure_url }= await cloudinary.uploader.upload(req.file.path, {folder: "server"});
    await fs.unlink(req.file.path)
    req.body.postAvatar = secure_url
  }


  const newPost = (await Post.create({ ...req.body, owner }));
  res.status(201).json(newPost);
};

export default addPost;
