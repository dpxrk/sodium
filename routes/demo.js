var express = require("express");
const { csrfProtection, asyncHandler } = require("./utils");
var router = express.Router();
const { User } = require("../db/models");

/* GET home for the Demo page. */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.locals.authenticated = true;
    const demoUser = await User.findOne({
      where: {
        email: "demo.user@demo.com",
      },
    });

    res.locals.user = demoUser; //container to put any arbitrary amount of data
    res.render("index", { title: "Sodium" });
  })
);

router.get(
  "/createArticle",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.locals.authenticated = true;
    const demoUser = await User.findOne({
      where: {
        email: "demo.user@demo.com",
      },
    });

    res.locals.user = demoUser;
    res.render("createArticle", { csrfToken: req.csrfToken() });
  })
);

module.exports = router;
