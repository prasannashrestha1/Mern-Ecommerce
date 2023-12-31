import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  getProductController,
  ProductPhotoController,
  getSingleProductController,
  deleteProductController,
  updateProductController,
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
router.get("/single-product/:slug", getSingleProductController);

//get product photo
router.get("/product-photo/:pid", ProductPhotoController);

//get photo
router.get("/delete-product/:pid", deleteProductController);

export default router;
