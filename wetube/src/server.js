import express from "express";
import morgan from "morgan";

import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";



console.log(process.cwd()); // current work directory

const app = express();
const logger = morgan("dev");

// /(router) + *(controller) 

app.set("view engine", "pug");	// npm i pug
app.set("views", process.cwd() + "/src/views");
//app.set("views", "./views");
app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter)


export default app;

