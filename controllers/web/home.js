const getHomePage = async (req, res, next) => {
  res.status(200).render("home");
};
module.exports = {getHomePage}