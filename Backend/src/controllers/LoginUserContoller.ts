import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import User from "../models/UserModel";

const bcrypt = require('bcrypt');
const crypto = require('crypto');

const LoginUser = async (req: Request, res: Response) => {
    console.log(req?.body)
    try {
        const user = await User.findOne({
            email: req.body.email,
        })
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user?.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        if (user) {
            const token = jwt.sign({
                name: user.name,
                email: user.email
            }, 'secret123')
            return res.json({ status: 'Ok', user: token })
        }
        else {
            return res.json({ status: 'error', user: false })
        }
    }
    catch (err) {
        console.log('error', err)
        res.send('error');
    }
}

module.exports = { LoginUser };