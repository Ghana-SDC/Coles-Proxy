const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

const clientBundles = "../public/services";
const serverBundles = "../templates/services";
const serviceConfig = require("../service-config.json");
const services = require("./loader")(
  clientBundles,
  serverBundles,
  serviceConfig
);

const React = require("react");
const ReactDOM = require("react-dom/server");
const Layout = require("../templates/layout");
const App = require("../templates/app");
const Scripts = require("../templates/scripts");

const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDOM.renderToString(component);
  });
};

app.get("/", (req, res) => {
  let components = renderComponents(services, {});
  res.end(
    Layout("Coles Proxy", App(...components), Scripts(Object.keys(services)))
  );
});

app.listen(port, () => console.log(`Connected to port ${port}`));
