const homeController = require("./web/home");
const adminProductsController = require("./admin/products");
module.exports = {
  ...homeController,
  ...adminProductsController,
};
