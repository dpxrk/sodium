const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { asyncHandler } = require('./utils')
const bearerToken = require('express-bearer-token');
const { generateUserToken, requireAuth } = require('../auth');

const { User } = require('../db/models')

router.post(
  'signup',
  asyncHandler(async (req, res) => {
    const { id, firstName, lastName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ id, firstName, lastName, email, hashedPassword, phoneNumber });

    const token = generateUserToken(user);
    res.json({ token })
  }),
)



router.get('/', requireAuth, asyncHandler(async (req, res) => {
  res.json({ currentUser: res.locals.user })
}))
module.exports = router;
