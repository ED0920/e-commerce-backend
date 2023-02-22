// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Product,
    unique: true,
  },
});

// Categories have many Products

Category.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false,
  },
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
