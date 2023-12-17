import { Router } from "express";
import {getCurrentUser} from "../controller/userController.js";

const router = Router();

router.get("/current-user", getCurrentUser);

export default router;

