import { Request, Response } from "express"
import User from "../models/UserModel"

const GetUSers = async (req: Request, res: Response) => {
    try {
        const user:any[] = await User.find()
        res.send(user)
    }
    catch (err) {
        console.log('error', err)
        res.send(err);
    }
}

module.exports = { GetUSers };