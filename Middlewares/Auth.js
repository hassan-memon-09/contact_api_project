import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js';
export const isAuthenticated = async(req,res,next)=>{
    const token = req.header('Auth');
    if(!token){
        return res.json({message:'Login First'})
    }
    // console.log("check token",token)

    const decode = jwt.verify(token,process.env.JWT);
    console.log("token data = ",decode)

    const id = decode.userId;

    let user = await User.findById(id);
    if(!user){
        return res.json({message:'User not found'})
    }

    req.user =user;

    next();
}