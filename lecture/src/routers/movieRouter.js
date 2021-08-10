import express from "express";
import {watch, getEdit, postEdit, getUpload, postUpload, deleteMovie} from "../controllers/movieController";
import {
  videoUpload,
} from "../middlewares";

const movieRouter = express.Router();


movieRouter.get("/:id([0-9a-f]{24})", watch);	// regular expression
movieRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.route("/:id([0-9a-f]{24})/delete").get(deleteMovie);
movieRouter.route("/upload").get(getUpload).post(videoUpload.single("video"), postUpload);
;

export default movieRouter;