export const join = (req, res) => res.send("Join User");

export const edit = (req, res) => res.send("Edit User");

export const remove = (req, res) => res.send("Remove User");

export const login = (req, res) => res.send("Login");

export const editProfile = (req, res) => res.send("Edit-profile");

export const digit = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};

