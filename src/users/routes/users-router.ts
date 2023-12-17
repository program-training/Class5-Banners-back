import { Router } from "express";
import signUp from "../controllers/sign-up";
import { handleLogInReq } from "../controllers/login";
import { authorizationMiddleWare } from "../../middleware/authorization";
import handleGetUser from "../controllers/getUser";
import handleUpdateUser from "../controllers/updateUser";
import handleDeleteUserReq from "../controllers/deleteUser";

const router = Router();

router.post("/sign-up", signUp);
router.post("/login", handleLogInReq);
router.post("/reset");
router.get("/", authorizationMiddleWare, handleGetUser);
router.put("/", authorizationMiddleWare, handleUpdateUser);
router.delete("/", authorizationMiddleWare, handleDeleteUserReq);

export default router;
