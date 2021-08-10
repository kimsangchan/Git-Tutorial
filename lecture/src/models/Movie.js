import mongoose from "mongoose";

// Create a Movie Model here.

const movieSchema = new mongoose.Schema({
	title: String,
	summary: String,
	year: Number,
	rating: Number,
	fileUrl: { type: String, required: true },
	genres: [{ type: String }]
});
// statics
movieSchema.static("formatGenres", function (genres) {
  return genres
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});
const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
