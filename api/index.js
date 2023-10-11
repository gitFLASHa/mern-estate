import express from 'express'
import mongoose from 'mongoose'
import  dotenv  from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=> {
    console.log('connected to db');
}).catch((err) => {
    console.log(err)
})

// For example, if your password in plain-text is p@ssw0rd'9'!, you need to encode your password as: p%40ssw0rd%279%27%21
//pass must be hidden in .env

const app = express();

app.listen(3000, () => {
    console.log('server running on port 3000!');
} 
);