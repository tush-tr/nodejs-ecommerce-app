const {Product} = require("../../models")
exports.getProducts = async (req, res, next) => {
  const products = await Product.getAll();

  res.render("admin")
};

