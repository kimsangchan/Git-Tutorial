export const watch = (req, res) => res.send("Watch Video");
export const remove = (req, res) => {
	res.send("Remove Video");
};
export const trending = (req, res) => res.send("Trending Video");
export const digit = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");