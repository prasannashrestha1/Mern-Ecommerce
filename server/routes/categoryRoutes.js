import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update routes routes
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get all category  routes
router.get("/get-category", categoryController);

//get single Category
router.get("/single-category/:slug", singleCategoryController);

//delete Category
router.delete(
  "/delete-Category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
