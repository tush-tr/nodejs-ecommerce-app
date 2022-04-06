const express = require("express");
const router = express.Router();

// const { signupValidator, signinValidator } = require("../../middlewares/validators");
// const { handleErrors } = require("../../middlewares/validationHandler");
const { postSignup, postSignin, getSignin, getSignup, getSignOut } = require("../../controllers");
// const { signinView, signupView } = require("../../views")

router.get("/signup", getSignup);
router.get("/signout", getSignOut);
router.get("/signin", getSignin);
// router.post("/signup", signupValidator, handleErrors(signupView), postSignup);
// router.post("/signin", signinValidator, handleErrors(signinView), postSignin);
router.post("/signup",postSignup)
router.post("/signin",postSignin)
module.exports = router;
