import { Request, Response, Router } from "express";
import usersRouter from "../users/routes/users-router";
import bannersRouter from "../banners/router/banners-router";
import handleNotFound from "../errors/handle-not-found";
import { requireAuth } from "../middleware/authorization";

const router = Router();

router.use("/test-server-up", (req: Request, res: Response) => {
  res.send("server is up");
});
router.use("/t", (req: Request, res: Response) => {
  res.send("running the test");
});
router.use("/api/users", usersRouter);
router.use("/api/banners", requireAuth, bannersRouter);
router.use(handleNotFound);

export default router;
