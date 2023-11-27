import { Router } from "express";
import signUp from "../controllers/sign-up";
import { handleLogInReq } from "../controllers/login";
import { requireAuth } from "../../middleware/authorization";
import handleGetUser from "../controllers/getUser";
import handleUpdateUser from "../controllers/updateUser";

const router = Router();

router.post("/sign-up", signUp);
router.post("/login", handleLogInReq);
router.get("/", requireAuth, handleGetUser);
router.put("/", requireAuth, handleUpdateUser);

export default router;
