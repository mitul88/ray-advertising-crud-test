const {
  create,
  updateProduct,
  viewProduct,
  deleteProduct,
  allProducts,
} = require("../controllers/product.controller");
const {
  productDetailsValidation,
  checkIdParam,
} = require("../middlewares/validation.middleware");

const router = require("express").Router();

router.route("/").post([productDetailsValidation], create);
router.route("/").get(allProducts);
router.route("/:id").get(viewProduct);
router
  .route("/:id")
  .put([checkIdParam, productDetailsValidation], updateProduct);
router.route("/:id").delete([checkIdParam], deleteProduct);

module.exports = router;
