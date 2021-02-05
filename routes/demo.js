const express = require("express");
const { csrfProtection, asyncHandler } = require("./utils");
const router = express.Router();
const { User } = require("../db/models");
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");

/* GET home for the Demo page. */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const demoUser = await User.findOne({
      where: {
        email: "demo.user@demo.com",
      },
    });

    loginUser(req, res, demoUser);
    // res.locals.user = demoUser; //container to put any arbitrary amount of data
    return req.session.save((error) => {
      if (error) {
        next(error);
      } else {
        res.redirect("/");
      }
    });
  })
);

//project purposes, can compile in all one database.

router.post("/logout", (req, res) => {
  logoutUser();
});

module.exports = router;
