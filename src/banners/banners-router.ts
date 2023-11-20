import { Router } from "express";
import addBanner from "./controllers/add-banner";

const router = Router()

router.post('/new', addBanner)

export default router