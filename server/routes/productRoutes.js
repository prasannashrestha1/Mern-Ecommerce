import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  getProductController,
  ProductPhotoController,
  getSingleProductController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  brainTreeTokenController,
  brainTreePaymentController,
} from "../controllers/productController.js";
import formidableMiddleware from "express-formidable";

const router = express.Router();

// create product routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidableMiddleware(),
  createProductController
);

//update the prodcut routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidableMiddleware(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single products
router.get("/get-product/:slug", getSingleProductController);

//get product photo
router.get("/product-photo/:pid", ProductPhotoController);

//get photo
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filter", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payment routes
//token
router.get("/braintree/token", brainTreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
