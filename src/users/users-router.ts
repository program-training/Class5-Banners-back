import { Router } from "express";
import signUp from "./controllers/sign-up";
import { handleLogInReq } from "./controllers/login";
import { requireAuth } from "../middleware/authorization";
import handleGetUser from "./controllers/getUser";

const router = Router();

router.post("/sign-up", signUp);
router.post("/login", handleLogInReq);
router.get("/", requireAuth, handleGetUser);

export default router;
