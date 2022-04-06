const nosonDb = require("@tush-tr/nosondb")

const User = new nosonDb('db/users.json')
const Product = new nosonDb("db/products.json")
const Cart = new nosonDB("db/cart.json")

module.exports = {User,Product,Cart}
