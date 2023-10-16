import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'


export const signup = async (req, res, next) => {
  //when we use awaits we need asyc to make it asynchornous
  const { username, email, password } = req.body; //destrcting
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save(); //can fail due to network slowness so added awaits
    res.status(201).json("User " + username + " created!");
  } catch (error) {
    next(error); //status 500 returns error not logs in console
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  /*authentication*/
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password) /*find one will take the 
    entire user model instance*/
    if(!validPassword) return next(errorHandler(401, "Invalid Credentials!"));
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);

    const {password: pass, ...rest} = validUser._doc
    res.cookie ('access_token', token, { httpOnly: true,}).status(200).json(rest);
  } catch (error) {
    next(error); /*catch the error using the middle ware isndie the index.js
    1. email is exisintg ?
    2. check the password*/
  }
};
