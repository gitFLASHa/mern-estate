import express from 'express'
import mongoose from 'mongoose'
import dotenv  from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=> {
    console.log('connected to db');
}).catch((err) => {
    console.log(err)
})

// For example, if your password in plain-text is p@ssw0rd'9'!, you need to encode your password as: p%40ssw0rd%279%27%21
//pass must be hidden in .env

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server running on port 3000!');
} 
);

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);