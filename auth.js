const db = require("./db/models");
const jwt = require("jsonwebtoken");

//nav bar login/signup.
const loginUser = (req, res, user) => {
  req.session.auth = {
    email: user.email,
    userId: user.id,
    // reason: storing passwords isn't ideal. password: user.passwordHash
  };
};

//middleware
const restoreUser = async (req, res, next) => {
  // console.log(req.session);
  if (req.session.auth) {
    const { userId } = req.session.auth;
    try {
      const user = await db.User.findByPk(userId);
      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

const logoutUser = (req, res) => {
  console.log("THIS IS BEFORE:", req.session.auth);
  delete req.session.auth;
  console.log("THIS IS AFTER:", req.session.auth);
};

// We don't want token based... we want session based
// function generateUserToken(user) {
//   const payload = { id: user.id, email: user.email }
//   const token = jwt.sign(payload, secret, { expiresIn: '30min' })
//   return token
// }

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect("/user/login");
  }
  return next();
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};
