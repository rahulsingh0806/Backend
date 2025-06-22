const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async(req, res) => {
    try{
        const {name, email, password, role} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:"Facing error while bcrypting the password"
            })
        }
        const createUser = await User.create({
            name,email,password:hashedPassword,role
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Facing error while creating user"
        })
    }
}


exports.login = async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status("500").json({
                success:false,
                message:"No getting valid inputs"
            })
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User doesn't exists, Please signup first"
            })
        }
        payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign(payload,
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn:"2h"
                                    });

            user.token = token;
            user.password = undefined;

            const options ={
                expiresIn:new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }
            return res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,       
                message:"User logined successfully"
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"Password doesn't matched"
            })
        }
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Facing error while logining user"
        })
    }
}