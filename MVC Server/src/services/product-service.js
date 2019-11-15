const Product = require("../models/product");
const Shop = require("../models/shop");
const ShopProduct = require("../models/shop-product");
const ShopsService = require("./shop-service");
const ProductType = require("../models/product-type");
const ProductProduct = require("../models/product-product");

const getProducts = async (name, type, shop, offset = 0) => {
  const updatedParams = {
    where: name ? { name } : {},
    limit: 12,
    offset: offset,
    include: [
      {
        model: Shop,
        through: {
          model: ShopProduct,
          attributes: ['quantity'],
        },
        where: shop ? {name: shop} : {}
      },
      {
        model: ProductType,
        where: type ? {name: type} : {}
      },
      {
        model:Product,
        as: "product1",
        through: {
          model: ProductProduct
        }
      },
      {
        model:Product,
        as: "product2",
        through: {
          model: ProductProduct
        }
      }
    ]
  }
  return await Product.findAll(updatedParams);
}

const getProductByPK = async (id) => {
  return await Product.findAll({
    where: { id },
    include: [
      {
        model: Shop,
        through: {
          model: ShopProduct,
          attributes: ['quantity'],
        }
      },
      {
        model: ProductType,
          where: type ? {name: type} : {}
      }
    ] 
  });
}

const addProduct = async (name, description, shops, quantity) => {
  const shopsInstances = await ShopsService.getShopByPK(shops);
  const newProduct = await Product.create({ name, description });
  for (let i = 0; i < shopsInstances.length; i++) {
    await newProduct.addShop(shopsInstances[i], {
      through: {
        quantity: quantity[i]
      }
    });
  }
  return await getProductByPK(newProduct.id);
}

const deleteProduct = async (id) => {
  return await Product.destroy( { where: { id } } );
}

module.exports = { getProducts, getProductByPK, addProduct, deleteProduct };
