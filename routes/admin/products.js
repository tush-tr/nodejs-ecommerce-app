const express = require("express");
const router = express.Router();
const { getProducts } = require("../../controllers");
router.get("/admin/products", getProducts);
module.exports = router;
