const {Product} = require("../../models");
const productsView = require("../views/web/index");
exports.getProducts = async (req, res, next) => {
  const products = await Product.getAll();

  res.send(productsView({ products }));
};

