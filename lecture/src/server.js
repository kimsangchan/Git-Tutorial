import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import rootRouter from "./routers/rootRouter";
import movieRouter from "./routers/movieRouter";
import userRouter from "./routers/userRouter";


console.log(process.cwd()); // current work directory

const app = express();
const logger = morgan("dev");

// /(router) + *(controller) 

app.set("view engine", "pug");	// npm i pug
app.set("views", process.cwd() + "/src/views");
//app.set("views", "./views");
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);
app.use("/movies", movieRouter);
app.use("/users", userRouter);



export default app;

