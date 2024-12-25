import jwt from "jsonwebtoken";

export const verifyToken = (req, _, next) => {
  const token = req.cookies.collab_token;

  // console.log("token::-> ", token);

  if (!token) {
    return next({
      status: 401,
      message: "Unauthorized User!",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      console.log(error);

      return next({
        status: 401,
        message: "Unauthorized User!",
      });
    }
    req.user = user.user;
    next();
  });
};
