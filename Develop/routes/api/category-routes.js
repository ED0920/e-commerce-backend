const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoriesData = await Category.findAll();
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
}
);

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = Category.findByPk(req.params.id, {
      include: [{model:Product, through: Category, as: 'category_id'}]
    });
    if (!categoryData){
      res.status(400).json({message: 'No product found with this id!'})
    }
  }
});

router.post("/", (req, res) => {
  try{
    const categoryData = Category.
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  const categoryData = Category.update(id:)
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  const categoryData = Category.delete({
    where:{
      id:req.params.id
    }
  });
  if(!Category){
    res.status(404).json({message: 'No category found with this id!'})
  };
  res.status(200).json(categoryData);
});

module.exports = router;
