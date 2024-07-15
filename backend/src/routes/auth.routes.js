import { Router } from "express";
import authController from "../controllers/auth.controller.js"

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/verify-code", authController.verifyRegister);
router.post("/resend-code", authController.resendCode);

export default router;