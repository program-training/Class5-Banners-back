import jwt from 'jsonwebtoken'
import { getUserByID } from "../users-DAL"
import errors from '../../errors/errors';
const JWT_SECRET = process.env.JWT_SECRET

export default async (ID: string) => {
    try {
        if (!JWT_SECRET) throw new Error(errors.JWTkeyMissing);
        const user = getUserByID(ID)
        const token = jwt.sign(JSON.stringify(user), JWT_SECRET)
    } catch (error) {
        
    }
}