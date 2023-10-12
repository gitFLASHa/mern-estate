import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => { //when we use awaits we need asyc to make it asynchornous
    const {username, email, password} = req.body; //destrcting 

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({username, email, password: hashedPassword});

    try{
        await newUser.save() //can fai due to network slowness so added awaits
        res.status(201).json("User "+username+" created!");
    }catch(error){
        res.status(500).json(error.message); //status 500 returns error not logs in console 
    
    }

    

};