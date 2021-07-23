export const edit = (req, res) => {
	res.send("Stroy edit");
};
export const remove = (req, res) => {
	return res.send("Stroy remove");
};
export const digit = (req, res) => {
	return res.send(`Story #${req.params.id}`);
};
export const _new = (req, res) => {
	return res.send("new!!");
};
export const welcome = (req, res) => {
	return res.send("/!!");
};
