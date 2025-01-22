import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'
import { config } from 'dotenv';



const app = express();
app.use(bodyParser.json())

//.env setup
config({path:'.env'})



//User Routes
app.use('/api/user',userRouter)


//Contact Router
app.use('/api/contact',contactRouter)

//Home route 
app.get('/',(req,res)=>{
    res.json({message:"this is home routes working perfectly"})
})






mongoose.connect(process.env.MONGO_URL,{
    dbName:"Contact_API_Project"
}).then(()=>console.log("MongoDB is Connected")).catch((err)=>console.log(err))


const port =process.env.PORT;

app.listen(port,()=>console.log(`server is running on port ${port}`))