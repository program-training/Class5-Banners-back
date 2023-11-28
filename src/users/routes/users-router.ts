import { Router } from "express";
import signUp from "../controllers/sign-up";
import { handleLogInReq } from "../controllers/login";
import { requireAuth } from "../../middleware/authorization";
import handleGetUser from "../controllers/getUser";
import handleUpdateUser from "../controllers/updateUser";
import handleDeleteUserReq from "../controllers/deleteUser";

const router = Router();

router.post("/sign-up", signUp);
router.post("/login", handleLogInReq);
router.get("/", requireAuth, handleGetUser);
router.put("/", requireAuth, handleUpdateUser);
router.put("/reset");
router.delete("/", requireAuth, handleDeleteUserReq);

export default router;
