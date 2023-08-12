import { Request, Response } from "express"
import User from "../models/UserModel"

const bcrypt = require('bcrypt');

const AddUSer = async (req: Request, res: Response) => {
    console.log(req?.body)

    try {
        // Check if the username already exists
        const email=req.body.email;
        const existingUser = await User.findOne({email:email});
        if (existingUser) {
            return res.send({ status: '409', error: 'Username already exists' })
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        user.save().then((resp) => {
            res.send(user)
        })

    }
    catch (err) {
        console.log('error', err)
        res.send(err);
    }
}

module.exports = { AddUSer };