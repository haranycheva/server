import express from "express";
import postControllers from "../controllers/posts-controllers.js";
import { validateBody } from "../decorators/index.js";
import { addPostSchema, editPostSchema } from "../schema/post-schema.js";
import { isEmptyBody, isValidId } from "../middleware/index.js";

const postRouter = express.Router();

postRouter.get("/", postControllers.getPosts);

postRouter.get("/:id", isValidId, postControllers.getPostById);

postRouter.post(
  "/",
  isEmptyBody,
  validateBody(addPostSchema),
  postControllers.addPost
);

postRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(editPostSchema),
  postControllers.editPost
);

postRouter.delete("/:id", postControllers.deletePost);

export default postRouter;
