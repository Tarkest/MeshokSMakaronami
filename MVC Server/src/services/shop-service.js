const Product = require("../models/product");
const Shop = require("../models/shop");
const ShopProduct = require("../models/shop-product");
const ProductsService = require("./product-service");
const ProductType = require("../models/product-type");

const getShops = async (name, type, productName, offset = 0) => {
  const updatedParams = {
    where: name ? { name } : {},
    limit: 12,
    offset: offset,
    include: [
      {
        model: Product,
        through: {
          model: ShopProduct,
          attributes: ['quantity'],
        }
      }
    ]
  }
  return await Shop.findAll(updatedParams);
}

const getShopByPK = async (id) => {
  return await Shop.findAll({
    where: { id: id },
    include: [{
      model: Product,
      through: {
        model: ShopProduct,
        attributes: ['quantity'],
      }
    }]
  });
}

const addShop = async (name, description, products, quantity) => {
  const productsInstances = await ProductsService.getProductByPK(products);
  const newShop = await Shop.create({name, description});
  for (let i = 0; i < productsInstances.length; i++) {
    await newShop.addProducts(productsInstances[i], {
      through: {
        quantity: quantity[i]
      }
    });
  }
  return getShopByPK(newShop.id);
}

const deleteShop = async (id) => {
  return await Shop.destroy({ where: { id } });
}

module.exports = { getShops, getShopByPK, addShop, deleteShop };
