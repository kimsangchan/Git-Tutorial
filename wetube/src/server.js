import express from "express";

const PORT = 4000;

const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const app = express(); // make application 


const urlLogger = (req, res, next) => {
	console.log(`Path: ${req.url}`);	// localhost:4000/
	next();
};
const timeLogger = (req, res, next) => {
	console.log(`Time: ${year}.${month}.${day}`);	// ex 2021.07.21
	next();
};
const securityLogger = (req, res, next) => {
	const protocol = req.protocol;
	if(protocol === "http"){
		console.log(`Insecure: ❌`);	// http: Insecure X, https: Insecure O
	}else{
		console.log(`Insecure: ⭕`);
	}
	
	next();
};

const privateMiddleware = (req, res, next) => {
	const url = req.url;
	if(url === "/protected"){
		return res.send("<h1>Not Allowed</h1>")
	}
	console.log("Allowed, you may continue.");
	next();
}
const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
	return res.send("Welcome to the private lounge");
}
app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listenting on port http:/localhost:${PORT}`);

app.listen(PORT, handleListening);

