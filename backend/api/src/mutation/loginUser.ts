import { Response } from "express";
import { Users } from "../model";
import jwt from 'jsonwebtoken';


export const loginUser = async (email: String, password: String, res: Response) => {

    try {
        const secretKey = '7122049eea9fa9ed2a1fec39604a643d8da5b96f5e474361d5b13597638c76b8'

        const user = await Users.findOne({ email, password }).exec()

        if(!user){
            throw new Error('Invalid credentials')
        }

        const token = jwt.sign({ userId: user._id, email: user.email}, secretKey)
        res.cookie('token', token, {httpOnly: true})

        return { token, user}
        
    } catch (error) {
        console.log(error)
    }
}