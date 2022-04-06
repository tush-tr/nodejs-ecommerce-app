const usersRepo = require("../../models/users");
const { hashPassword } = require("../../util/auth");
const signinView = require("../../views/admin/auth/signin");
const signupView = require("../../views/admin/auth/signup");

// exports.postSignup = async (req, res, next) => {
//   const { email, password: suppliedPassword } = req.body;
//   console.log(req.body)
//   const password = await hashPassword(suppliedPassword);
//   const saveUserObj = { email, password };
//   const savedUser = await usersRepo.create(saveUserObj);

//   req.session.userId = savedUser.id;
//   res.send("Account Created");
// };

// exports.postSignin = async (req, res, next) => {
//   const { email } = req.body;
//   const user = await usersRepo.getOneBy({ email });

//   req.session.userId = user.id;
//   res.redirect('/admin/products');
// };

exports.getSignin = async (req, res, next) => {
  res.send(signinView({}));
};

exports.getSignup = async (req, res, next) => {
  res.send(signupView({ req }));
};

exports.getSignOut = async (req, res, next) => {
  req.session = null;
  res.redirect('/admin/products');
};
