import bcrypt from 'bcrypt'
import { NewUserReqI } from '../../types/types';
import { addUser } from '../users-DAL-mongoDB';

const saltRounds = 10;

export default async (user: NewUserReqI) => {    
    try {
        const hash = await bcrypt.hash(user.password, saltRounds)
        const addedUser = await addUser({ ...user, passwordHash: hash })
        return addedUser
    } catch (error) {
        return Promise.reject(error)
    }
}