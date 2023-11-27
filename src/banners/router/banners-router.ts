import { Router } from "express";
import addBanner from "../controllers/add-banner";
import handleGetBannerByIdReq from "../controllers/get-banner-byId";
import handleGetAllBannersReq from "../controllers/get-all-banners";
import handleGetBannerByUserIdReq from "../controllers/getBannerByUSerID";
import handleDeleteBannerReq from "../controllers/delete-banner";
import handleEditBanner from "../controllers/edit-banner";

const router = Router();

router.get("/", handleGetAllBannersReq);
router.get("/mybanners/:userId", handleGetBannerByUserIdReq);
router.get("/:id", handleGetBannerByIdReq);
router.post("/new", addBanner);
router.put("/:id", handleEditBanner);
router.delete("/:id", handleDeleteBannerReq);

export default router;
