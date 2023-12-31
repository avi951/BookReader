import { Router } from "express";
import { body, param, validationResult } from "express-validator";
const router = Router();
import { register, login, logout } from "../controller/authController.js";
import { validateRegisterInput,validateLoginInput } from "../middleware/validationMiddleware.js";

router.post("/register",validateRegisterInput,register);
router.post("/login",validateLoginInput, login);
router.get("/logout", logout);

export default router;
