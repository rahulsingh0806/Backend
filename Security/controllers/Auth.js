const User = require("../models/User");
const bcrypt = require("bcrypt");

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
        // if(!name || !email || !password || !role){
        //     return res.status("500").json({
        //         success:false,
        //         message:"No getting valid inputs"
        //     })
        // }
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