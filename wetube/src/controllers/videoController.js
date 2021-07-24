const fakeUser = {
	username: "Nicolas",
	loggedIn: false,
};

export const watch = (req, res) => res.send("Watch Video");
export const remove = (req, res) => {
	res.send("Remove Video");
};
// export const trending = (req, res) => {
// 	res.render('home', { title: 'Goorm', message: 'Welcome to GoormEdu'});
// };
export const trending = (req, res) => {
	res.render("home", {pageTitle: "Home", fakeUser: fakeUser}); // render to ***.pug 
};
export const digit = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");