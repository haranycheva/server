import express from "express";
import postControllers from "../controllers/posts-controllers.js";
import { validateBody } from "../decorators/index.js";
import { addPostSchema, editPostSchema } from "../schema/post-schema.js";
import { authorization, isEmptyBody, isValidId, upload } from "../middleware/index.js";

const postRouter = express.Router();

postRouter.get("/", authorization, postControllers.getPosts);

postRouter.get("/:id", authorization, isValidId, postControllers.getPostById);

postRouter.post(
  "/",
  upload.single('postAvatar'),
  authorization,
  isEmptyBody,
  validateBody(addPostSchema),
  postControllers.addPost
);

postRouter.put(
  "/:id",
  authorization,
  isValidId,
  isEmptyBody,
  validateBody(editPostSchema),
  postControllers.editPost
);

postRouter.delete("/:id", authorization, postControllers.deletePost);

export default postRouter;
