import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

//routerobject

const router = express.Router();

//routing

//Register || Method POST
router.post("/register", registerController);

//login || method post
router.post("/login", loginController);

export default router;
