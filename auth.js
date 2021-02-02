const db = require('./db/models');
const jwt = require('jsonwebtoken')
const secret = 'asdfghjkl123456789'


//nav bar login/signup.
const loginUser = (req, res, user) => {
  req.session.auth = {
    email: user.email,
    password: user.passwordHash
  }
}

const logoutUser = (req, res) => {
  delete req.session.auth;
}


function generateUserToken(user) {
  const payload = { id: user.id, email: user.email }

  const token = jwt.sign(payload, secret, { expiresIn: '30min' })
  return token
}


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
  generateUserToken,
  requireAuth
}