const db = require('./db/models');
const jwt = require('jsonwebtoken')
const secret = 'asdfghjkl123456789'


//nav bar login/signup.
const loginUser = (req, res, user) => {
  req.session.auth = {
    email: user.email,
    userId: user.id
    // reason: storing passwords isn't ideal. password: user.passwordHash
  }
}

const restoreUser = async (req, res, next) => {
  console.log(req.session);
  if (req.session.auth) {
    const { userId } = req.session.auth;
    try {
      const user = await db.User.findByPk(userId);
      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next()
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next()
  }
}

const logoutUser = (req, res) => {
  delete req.session.auth;
}

// We don't want token based... we want session based
// function generateUserToken(user) {
//   const payload = { id: user.id, email: user.email }
//   const token = jwt.sign(payload, secret, { expiresIn: '30min' })
//   return token
// }


function requireAuth(req, res, next) {
  const { token } = req;

  if (!token) {
    const error = new Error('User does not exists. Please register')
    error.status = 404;
    return next(error)
  }

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      const error = new Error('Invalid Login :( please try again');
      error.status = 401;
      return next(error);
    }

    res.locals.user = decoded;
    next();
  })
}


module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser
}