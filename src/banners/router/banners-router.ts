import { Router } from "express";
import addBanner from "../controllers/add-banner";
import handleGetBannerByIdReq from "../controllers/get-banner-byId";
import handleGetAllBannersReq from "../controllers/get-all-banners";
import handleGetBannerByUserReq from "../controllers/getBannerByUSerID";
import handleDeleteBannerReq from "../controllers/delete-banner";
import handleEditBanner from "../controllers/edit-banner";
import handleGetUnBanneredProducts from "../controllers/getUnbunneredProducts";

const router = Router();

router.get("/", handleGetAllBannersReq);
router.get("/products", handleGetUnBanneredProducts);
router.get("/mybanners", handleGetBannerByUserReq);
router.get("/:id", handleGetBannerByIdReq);
router.post("/new", addBanner);
router.put("/:id", handleEditBanner);
router.delete("/:id", handleDeleteBannerReq);

export default router;
