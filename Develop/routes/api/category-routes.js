const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll();
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne(
      {
        where: { id: req.params.id },
      },
      {
        include: [Product],
      }
    );
    if (!categoryData) {
      res.status(400).json({ message: "No product found with this id!" });
    }
    res.status(200).json(categoryData);
  } catch {
    res.status(500).json(err);
  }
});

// create a category
router.post("/", (req, res) => {
  try {
    const categoryData = Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put("/:id", (req, res) => {
//   // update a category by its `id` value
//   const categoryData = Category.update(id:)
// });

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = Category.delete({
      where: {
        id: req.params.id,
      },
    });

    if (!Category) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
