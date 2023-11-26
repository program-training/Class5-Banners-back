import { Router } from "express";
import addBanner from "../controllers/add-banner";
import handleGetBannerByIdReq from "../controllers/get-banner-byId";
import handleGetAllBannersReq from "../controllers/get-all-banners";
import handleGetBannerByUserIdReq from "../controllers/getBannerByUSerID";

const router = Router();
router.get("/", handleGetAllBannersReq);
router.get("/banner/:userId", handleGetBannerByUserIdReq);
router.get("/:id", handleGetBannerByIdReq);
router.post("/new", addBanner);

export default router;
