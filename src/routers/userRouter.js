import express from "express";
import { edit, removeUser, logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", see);
userRouter.get("/logout", logout);
userRouter.get("/remove", removeUser);
userRouter.get("/edit", edit);

export default userRouter;