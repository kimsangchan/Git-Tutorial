import express from "express";

const PORT = 4000;

const app = express(); // make application 

const handleHome = (req, res) =>  {
	return res.send("<h1>I still love you.</h1>");
}
const handleLogin = (req, res) => {
	return res.send("<h2> Login here.</h2>");
}

const handleAbout = (req, res) => {
	return res.send("<div>what we talk about??</div>");
}
const handleContact = (req, res) => {
	return res.send("<ul>Contact Me 010 - 1234 - 5678 </ul>");
}
app.get("/", handleHome);		// request /
app.get("/login", handleLogin);	// request /login
app.get("/about", handleAbout);	// request /about
app.get("/contact", handleContact);	// request /contact

const handleListening = () => console.log(`Server listenting on port http:/localhost:${PORT}`);

app.listen(PORT, handleListening);

