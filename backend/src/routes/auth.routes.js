import { Router } from "express";
import { authController } from "../controllers/auth.controller.js"

const router = Router();

router.use("/register", authController.register);
router.use("/login", authController.login);
router.use("/logout", authController.logout);
router.use("/verify-code", authController.verifyCode);
router.use("/resend-code", authController.resendCode);

export default router;