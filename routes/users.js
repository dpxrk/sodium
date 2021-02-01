const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { asyncHandler, csrfProtection } = require('./utils')
const bearerToken = require('express-bearer-token');
const { generateUserToken, requireAuth, loginUser, logoutUser } = require('../auth');
const { check, validationResults } = require('express-validators');
const db = require('../db/models')

const { User } = require('../db/models')

const userValidatiors = [
  check('firstName')
    .exist({ checkFalsy: true })
    .withMessage('Please tell us your first name!')
    .isLength(15),
  check('lastName')
    .exist({ checkFalsy: true })
    .withMessage('Please tell us your last name!')
    .isLength(15),
  check('email')
    .exist({ checkFalsy: true })
    .withMessage('Please tell us your email address')
    .isLength(50)
    .isEmail()
    .withMessage('Email not found')
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use. Please try another emaill')
          }
        })
    }),
  check('passwordHash')
    .exist({ checkFalsy: true })
    .withMessage('Please input your secret password!')
    .isLength(100)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please retype your password to confirm password.')
    .isLength({ max: 50 })
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.get('/signup', csrfProtection(async (res, req) => {
  const user = db.User.build();
  res.render('signup', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken()
  })
}));


router.post(
  '/signup',
  csrfProtection,
  userValidatiors,
  asyncHandler(async (req, res) => {
    const { id, firstName, lastName, email, password, phoneNumber } = req.body;
    const user = await User.build({ id, firstName, lastName, email, hashedPassword, phoneNumber });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/')
    } else {
      const errors = validatorErrors.array().mpa((error) => error.msg);
      res.render('signup', {
        title: 'Sign Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      })

      const token = generateUserToken(user);
      res.json({ token })
    })
)




router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  })
}))


router.get('/', requireAuth, asyncHandler(async (req, res) => {
  res.json({ currentUser: res.locals.user })

}))
module.exports = router;
