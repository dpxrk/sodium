const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { asyncHandler, csrfProtection } = require("./utils");

const { requireAuth, loginUser, logoutUser } = require("../auth");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");

const { User } = require("../db/models");

const userValidators = [
  check("firstName")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please tell us your first name!")
    .isLength({ max: 15 }),
  check("lastName")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please tell us your last name!")
    .isLength({ max: 15 }),
  check("email")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please tell us your email address")
    .isLength({ max: 50 })
    .isEmail()
    .withMessage("Email not found")
    .custom((value) => {
      return db.User.findOne({
        where: {
          email: value,
        },
      }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided Email Address is already in use. Please try another email"
          );
        }
      });
    }),
  check("password")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please input your secret password!")
    .isLength({ max: 100 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
  check("confirmPassword")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please retype your password to confirm password.")
    .isLength({
      max: 50,
    })
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
  check("phoneNumber")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please enter a valid phone number.")
    .isLength({
      max: 11,
    }),
];

router.get(
  "/signup",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const user = db.User.build();
    res.render("signup", {
      title: "Sign Up",
      user,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/signup",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    // console.log("WE ARE HERE AT THIS ROUTE");

    const { firstName, lastName, email, password, phoneNumber } = req.body;
    console.log(
      "THESE ARE THE VALUES:",
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    );
    const user = User.build({
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    const validatorErrors = validationResult(req);
    // console.log("CHECKPPOINT NUMBER 2");
    console.log(validatorErrors);
    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.passwordHash = hashedPassword;
      await user.save().then(() => {
        loginUser(req, res, user);
        return req.session.save((error) => {
          if (error) {
            next(error);
          } else {
            return res.redirect("/");
          }
        });
      });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("signup", {
        title: "Sign Up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

const loginValidators = [
  check("email")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please input your email address"),
  check("password")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please input your secret password!"),
];

router.get("/login", csrfProtection, (req, res) => {
  res.render("login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    // console.log("THIS IS THE START OF THE ROUTE");
    const { email, password } = req.body;
    const errors = [];
    const validatorErrors = validationResult(req);
    // console.log("THESE ARE THE VALIDATOR ERRORS:", validatorErrors);
    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({
        where: { email },
      });
      if (user !== null) {
        // console.log("THIS IS THE PASSWORDS:", password, user.passwordHash);
        const passwordMatch = await bcrypt.compare(
          password,
          user.passwordHash.toString()
        );
        // console.log("THIS IS THE PASSWORD MATCH VALUE:", passwordMatch);
        if (passwordMatch) {
          loginUser(req, res, user);
          return req.session.save((error) => {
            if (error) {
              next(error);
            } else {
              return res.redirect("/");
            }
          });
        } else {
          errors.push("Invalid login :( Please try again");
        }
      }
    }
    errors.push(...validatorErrors.array().map((err) => err.msg));
    // console.log(errors)
    res.render("login", {
      title: "Login",
      csrfToken: req.csrfToken(),
      email,
      errors,
    });
  })
);

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.json({
      currentUser: res.locals.user,
    });
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  return req.session.save((error) => {
    if (error) {
      next(error);
    } else {
      return res.redirect("/");
    }
  });
});

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
