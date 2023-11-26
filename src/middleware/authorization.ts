// import jwt from 'jsonwebtoken'
// import { NextFunction, Request, Response } from "express";
// import { getUserByID } from "../users/users-DAL";

// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.headers.authorization
//         if (!token) return res.status(403).send('you must include authorization key in the request headers')
//         const payload = jwt.verify(token)
//         const user = getUserByID()
//     } catch (error) {
        
//     }
// }