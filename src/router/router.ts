import { Request, Response, Router } from "express";
import usersRouter from '../users/users-router'
import bannersRouter from '../banners/banners-router'
import handleNotFound from "../errors/handle-not-found";

const router = Router()

router.use('/test-server-up', (req: Request, res: Response) => {
    res.send('server is up')
})
router.use('/api/users', usersRouter)
router.use('/api/banners', bannersRouter)
router.use(handleNotFound)

export default router