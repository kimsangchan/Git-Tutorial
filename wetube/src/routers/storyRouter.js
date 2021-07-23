import express from "express";
import {edit, remove, digit} from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", digit);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/remove", remove);

export default storyRouter;