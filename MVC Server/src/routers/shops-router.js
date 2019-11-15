const express = require("express");
const productService = require("../services/product-service");
const shopService = require("../services/shop-service");
const typesServices = require("../services/types-services");
const utils = require("../utils/utils");

const shopsRouter = express.Router();

shopsRouter.get("/shops", async (req, res) => {
  const { filter, type, offset } = req.query;
  try {
    if(filter || type) {
      const products = utils.transformToJSONArray(await productService.getProducts(filter, type, null, offset));
      const shops = utils.getShopsFromProducts(products);
      const productsTypes = utils.transformToJSONArray(await typesServices.getTypes());
      res.render("main-page", { shop: shops, types: productsTypes });
    }
    else {
      const shops = utils.transformToJSONArray(await shopService.getShops(null, null, null, offset));
      const productsTypes = utils.transformToJSONArray(await typesServices.getTypes());
      res.render("main-page", { shop: shops, types: productsTypes });
    }
  }
  catch (error) {
    res.status(404).send(error);
  }
});

module.exports = shopsRouter;
