import { Router } from "express";
import addBanner from "./controllers/add-banner";
import handleGetBannerByProdIdReq from "./controllers/get-banner-byId";
import handleGetAllBannersReq from "./controllers/get-all-banners";

const router = Router();
router.get("/", handleGetAllBannersReq);
router.get("/:productId", handleGetBannerByProdIdReq);
router.get("/:bannerId");
router.post("/new", addBanner);

export default router;
