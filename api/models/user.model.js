import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique: true,
    }, 
    email: {
        type: String,
        required:true,
        unique: true,
    }
,
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://w7.pngwing.com/pngs/141/425/png-transparent-user-profile-computer-icons-avatar-profile-s-free-angle-rectangle-profile-cliparts-free-thumbnail.png"
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema); //the user ,ust be signular 


export default User;