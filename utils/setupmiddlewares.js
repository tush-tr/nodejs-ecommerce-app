const path = require("path");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const setupMiddlewares = (express, app) => {
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieSession({ keys: [process.env.SESSION_KEY] }));

    app.set("view engine", "jsx"); // set the view engine as jsx
    app.set("views", path.join(__dirname, "../views")); // set the views directory
    app.engine("jsx", require("express-react-views").createEngine());
};

module.exports = setupMiddlewares;