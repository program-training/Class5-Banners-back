import { Router } from "express";
import addBanner from "../controllers/add-banner";
import handleGetBannerByIdReq from "../controllers/get-banner-byId";
import handleGetAllBannersReq from "../controllers/get-all-banners";
import handleGetBannerByUserReq from "../controllers/getBannerByUSerID";
import handleDeleteBannerReq from "../controllers/delete-banner";
import handleEditBanner from "../controllers/edit-banner";
import { requireAuth } from "../../middleware/authorization";

const router = Router();

router.get("/", handleGetAllBannersReq);
router.get("/mybanners", requireAuth, handleGetBannerByUserReq);
router.get("/:id", handleGetBannerByIdReq);
router.post("/new", requireAuth, addBanner);
router.put("/:id", requireAuth, handleEditBanner);
router.delete("/:id", requireAuth, handleDeleteBannerReq);

export default router;
