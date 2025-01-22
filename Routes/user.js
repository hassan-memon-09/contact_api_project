import express from 'express'
import { register,login } from '../Controllers/user.js';


const router = express.Router();

//User register 
//@api dsc :- user register
//@api method :- post
//@api endPoint :- /api/user/register

router.post('/register',register)


//User Login
//@api dsc :- user Login
//@api method :- post
//@api endPoint :- /api/user/Login

router.post('/login',login)


export default router;