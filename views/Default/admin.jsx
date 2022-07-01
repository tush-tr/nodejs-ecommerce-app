var React = require("react");
const Navbar = require("../components/Navbar/Nav");
const links = [{ name: "Products", link: "/admin/products" }];
const AdminLayout = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/css/main.css" rel="stylesheet" />
        <link href="/css/auth.css" rel="stylesheet" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
        ></link>
        <title>Ecommerce App</title>
      </head>
      <body>
        <header>
          <Navbar brandName="Admin Portal" links={links} />
        </header>
        <div class="container-main admin">{props.children}</div>
      </body>
    </html>
  );
};
module.exports = AdminLayout;
