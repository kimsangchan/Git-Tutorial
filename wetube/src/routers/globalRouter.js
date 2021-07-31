import express from "express";
import {home} from "../controllers/videoController";
import {join, login} from "../controllers/userController";
import {_new,welcome} from "../controllers/storyController";

const globalRouter = express.Router();


globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/new", _new);

export default globalRouter;