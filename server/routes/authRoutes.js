import express from "express";
import { login, registerUser } from "../controllers/authController.js";

const router = express.Router();

// POST route for login
router.post("/login", login);
router.post("/register", registerUser);

export default router;
