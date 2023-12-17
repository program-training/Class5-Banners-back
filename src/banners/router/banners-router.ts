import { Router } from "express";
import addBanner from "../controllers/add-banner";
import handleGetBannerByIdReq from "../controllers/get-banner-byId";
import handleGetAllBannersReq from "../controllers/get-all-banners";
import handleGetBannerByUserReq from "../controllers/getBannerByUSerID";
import handleDeleteBannerReq from "../controllers/delete-banner";
import handleEditBanner from "../controllers/edit-banner";
import handleGetUnBanneredProducts from "../controllers/getUnbunneredProducts";
import { authorizationMiddleWare } from "../../middleware/authorization";

const router = Router();

router.get("/", handleGetAllBannersReq);
router.get("/products", authorizationMiddleWare, handleGetUnBanneredProducts);
router.get("/mybanners", authorizationMiddleWare, handleGetBannerByUserReq);
router.get("/:id", handleGetBannerByIdReq);
router.post("/new", authorizationMiddleWare, addBanner);
router.put("/:id", authorizationMiddleWare, handleEditBanner);
router.delete("/:id", authorizationMiddleWare, handleDeleteBannerReq);

export default router;
