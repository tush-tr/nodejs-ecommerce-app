const express = require("express");
const app = express();

const router = require("./routes")
const setupMiddlewares = require("./utils/setupmiddlewares")

setupMiddlewares(express,app)

app.use(router);

module.exports = app;