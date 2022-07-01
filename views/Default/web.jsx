var React = require("react");
const Header = require("../components/Header/index");
const Default = (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <h1 className="firstheading">College Reviews</h1>
        <section>{props.children}</section>
      </body>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
    </html>
  );
};
module.exports = Default;
