import express from "express";
import {upload, digit, edit, remove} from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", digit);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);


export default videoRouter;