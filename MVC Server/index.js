const express = require("express");
const config = require("./config");
const path = require("path");
const shopRouter = require("./src/routers/shops-router");
const ProductsProducts = require("./src/models/product-product");
const server = express();

server.set("view engine", "pug");
server.set('views', path.join(__dirname, 'src/views'));
server.use(express.static(__dirname + '/public'));

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
  next();
});

server.get("/", (req, res) => {
  res.redirect("/shops");
});

server.use(shopRouter);

server.listen(config.serverPort, () => {
  console.log(`Server is running on ${config.serverPort}`);
});