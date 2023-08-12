import { Request, Response } from "express"
import User from "../models/UserModel"
import jwt from 'jsonwebtoken'

const Profile = async (req: Request, res: Response) => {
    const token = req.headers.token
    try {
        const decoded:any = jwt.verify(token as string, 'secret123')
        const email = decoded.email
        const user = await User.findOne({
            email: email,
        })
        res.send(user)
    }
    catch (err) {
        console.log('error', err)
        res.send(err);
    }
}

module.exports = { Profile };