const ShopProduct = require("../models/shop-product");

const deleteShopProduct = async (id) => {
  await ShopProduct.destroy({
    where: {
      id: id
    }
  });
}

module.exports = { deleteShopProduct };
