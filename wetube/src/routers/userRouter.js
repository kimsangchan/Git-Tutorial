import express from "express";
import {digit, editProfile, edit, remove} from "../controllers/userController";

const userRouter = express.Router();


// localhost:4000/users + /*
userRouter.get("/:id(\\d+)", digit);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/editProfile", editProfile);

export default userRouter;