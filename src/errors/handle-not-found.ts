import { Request, Response } from "express";
import handleControllerError from "./handle-controller-error";

export default async (req: Request, res: Response) => {
    try {
        res.status(404).send(`the require URL not exist or you cannot ${req.method} on this URL`)
    } catch (error) {
        handleControllerError(req, res, error)
    }
}