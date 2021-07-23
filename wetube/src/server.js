import express from "express";
import morgan from "morgan";

import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

// /(router) + *(controller) 
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter)

const handleListening = () => console.log(`Server listenting on port http:/localhost:${PORT}`);

app.listen(PORT, handleListening);

