import express from "express";
import { main, postUpload} from "./rootController";
import {
  fileUpload,
} from "./middlewares";
const rootRouter = express.Router();



rootRouter.route("/").get(main).post(fileUpload.single("txt"), postUpload);



export default rootRouter;