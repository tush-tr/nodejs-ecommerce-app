// import HeaderBars from "./header"
var React = require("react");
const Navbar = require("../Navbar/Nav");
const links = [
  { name: "Products", link: "/products" },
  { name: "Cart", link: "/cart" },
];
const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <Navbar brandName="Ecommerce" links={links} />
      </header>
      <div className="image-section-header">
        <img src="https://s3images.coroflot.com/user_files/individual_files/large_601412_pefdzgritogapshe0a4l4n0tb.jpg" />
      </div>
    </div>
  );
};
module.exports = Header;
