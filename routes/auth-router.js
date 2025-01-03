import express from "express";
import authControllers from "../controllers/auth-controllers.js";
import {  authorization, isValidId } from "../middleware/index.js";

const authRouter = express.Router();

authRouter.post("/signup", authControllers.signup);

authRouter.post("/signin", authControllers.signin);

authRouter.get("/verificate/:verificationToken", authControllers.verificate);

authRouter.get("/getInfo", authorization, authControllers.getInfo);

// authRouter.post("/logout", authControllers.logout);

export default authRouter;
