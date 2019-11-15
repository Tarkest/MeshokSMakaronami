const ProductType = require("../models/product-type");

const getTypes = async () => {
  return await ProductType.findAll();
}

module.exports = { getTypes };
