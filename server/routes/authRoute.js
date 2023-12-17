import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//routerobject

const router = express.Router();

//routing

//Register || Method POST
router.post("/register", registerController);

//login || method post
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
