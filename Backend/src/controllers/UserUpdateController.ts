import { Request, Response } from "express"
import User from "../models/UserModel"

const UpdateUser = async (req: Request, res: Response) => {
    console.log(req?.body)
    try {
        const user = await User.updateOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.send(user)
    }
    catch (err) {
        console.log('error', err)
        res.send(err);
    }
}

module.exports = { UpdateUser };