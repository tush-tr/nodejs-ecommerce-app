const express = require("express");
const router = express.Router();

const adminAuthRouter = require("./admin/auth")

router.use(adminAuthRouter)

module.exports = router;