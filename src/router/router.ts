import { Response, Router } from "express";
import usersRouter from "../users/routes/users-router";
import bannersRouter from "../banners/router/banners-router";
import handleNotFound from "../errors/handle-not-found";

const router = Router();

router.use("/test-server-up", (_, res: Response) => {
  res.send("server is up");
});
router.use("/t", (_, res: Response) => {
  res.send("running the test");
});
router.use("/users", usersRouter);
router.use("/banners", bannersRouter);
router.use(handleNotFound);

export default router;
