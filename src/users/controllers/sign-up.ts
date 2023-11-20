import { Request, Response } from "express";
import signUp from "../services/sign-up";
import errors from '../../errors/massages'
import handleControllerError from "../../errors/handle-controller-error";
import errorsLogger from "../../errors/errors-logger";

export default async (req: Request, res: Response) => {
    try {
        const user = req.body.user
        if (!(
                user &&
                typeof user.email === 'string' &&
                typeof user.password === 'string' &&
                typeof user.isAdmin === 'boolean' &&
                typeof user.username === 'string'
        )) {
            return res.status(400).send({signUpRequestsBodyStructure:  {
                user: {
                    email: 'string',
                    password: 'string',
                    username: 'string',
                    isAdmin: 'boolean',
                }
            }})
        }
        // if (!validateEmail(body.email)) {
        //     return res.status(400).send(`invalid email ${body.email}`)
        // }
        // if (!validatePassword(body.password)) {
        //     return res.status(400).send(
        //         `invalid password ${body.password} \npassword requirements: 8 characters, uppercase and lowercase letters, number and special character`
        //     )
        // }
        // const [user, token] = await signUp({...body})
        // res.send({...user, token})
        const newUser = await signUp(user)
        res.send(newUser)
    } catch (error) {
        if (error instanceof Error && error.message === errors.emailExist) {
            return res.status(409).send('email already exist')
        }
        errorsLogger(error)
        handleControllerError(req, res, error)
    }
}