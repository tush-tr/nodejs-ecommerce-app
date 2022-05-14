const express = require("express");
const router = express.Router();

// const adminAuthRouter = require("./admin/auth")
const testRouter = require("./test");
const homePageRouter = require("./client/home");
// router.use(adminAuthRouter)
router.use(testRouter);
router.use(homePageRouter);
module.exports = router;
