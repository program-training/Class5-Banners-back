import { Router } from "express";
import signUp from "./controllers/sign-up";
import { handleLogInReq } from "./controllers/login";

const router = Router();

router.post("/sign-up", signUp);
router.post("/login", handleLogInReq);

export default router;
