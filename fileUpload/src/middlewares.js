import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  next();
};

export const fileUpload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 10000000,
  },
});