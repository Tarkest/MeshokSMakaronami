const ProductProduct = require("../models/product-product");

const deleteProductProduct = async () => {
  await ProductProduct.destroy({
    where: {
      id
    }
  });
}

module.exports = { deleteProductProduct };