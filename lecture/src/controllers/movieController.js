import Movie from "../models/Movie";

export const home = async (req, res) => {
	const movies = await Movie.find({});
	console.log(movies);
  	return res.render("home", { pageTitle: "Home", movies});
};

export const watch = async (req, res) => {
  	const { id } = req.params;
	const movie = await Movie.findById(id);
	if(!movie){
		return res.render("404", {pageTitle: "movie not found."});	// It's important to return!!
		
	}
	return res.render("watch", { pageTitle: movie.title, movie});	
};
export const getEdit = async(req, res) => {
  	const { id } = req.params;
	const movie = await Movie.findById(id);
	console.log(movie);
	if(!movie){
		return res.render("404", {pageTitle: "movie not found."});
		
	}
	
	return res.render("edit", { pageTitle: `Edit: ${movie.title}`, movie });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
	console.log("check: "+JSON.stringify(req.body));
	const {title, summary, year, rating, genres} = req.body;
	const movie = await Movie.exists({ _id: id});
	if(!movie){
		return res.render("404", {pageTitle: "movie not found."});
	}
	await Movie.findByIdAndUpdate(id, {
		  	title,
			summary,
			year,
			rating,
		    genres: Movie.formatGenres(genres),
	});

  return res.redirect(`/movies/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload movie" });
};
export const postUpload = async (req, res) => {	// async need to await
	const {path: fileUrl} = req.file;
	console.log("url: ", fileUrl);
  	const { title, summary, year, rating, genres } = req.body;
	console.log("check body: "+JSON.stringify(req.body));
	try{
		await Movie.create({
			title,
			summary,
			year,
			rating,
			fileUrl,
		    genres: Movie.formatGenres(genres),
		});
		return res.redirect("/");
	} catch(error){
		return res.render("upload", {
	pageTitle: "Upload Movie",
	errorMessage: error._message,
	});
	}
	
};
export const deleteMovie = async (req, res) => {
	const { id } = req.params;
	await Movie.findByIdAndDelete(id);
	return res.redirect("/");
}

export const search = async (req, res) => {
	const { keyword } = req.query;
	let movies = [];
	if(keyword){
		movies = await Movie.find({
      		title: {
       		 $regex: new RegExp(`${keyword}$`, "i"),
      },
    });
		console.log(movies);
	}
	return res.render("search", {pageTitle: "Search", movies});
};