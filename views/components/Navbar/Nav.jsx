const React = require("react");
const Header = ({ brandName, links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="/" className="navbar-brand ms-5">
        {brandName}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          {links.map(({ name, link }) => (
            <li className="nav-item ms-2 me-2">
              <a href={link} className="nav-link">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
module.exports = Header;
