const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require("../controllers/productController");
const router = require("express").Router();

router.post("/create", createProduct);
router.get("/all", getAllProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);

module.exports = router;
