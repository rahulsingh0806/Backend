const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async(req, res, next) => {
    try{
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token not found"
            })
        }

        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            req.user = payload;
        } catch(error){
            return res.status(500).json({
                success:false,
                messgae:"Facing error while decoding the jwt token"
            })
        }
        next();

    } catch (error){
        console.log(error);
        return res.status(500).json({
            success:false,
            messgae:"facing error while authenticating the user"
        })
    }
}

exports.isStudent = async(req, res, next) =>{
    try{
        if(req.user.role != "Student"){
            return res.status(401).json({
                success:false,
                messgae:"This is the protected route for students"
            })
        }
        next();
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            messgae:"facing error while authenticating the user"
        })
    }
}

exports.isAdmin = async(req, res, next) =>{
    try{
        if(req.user.role != "Admin"){
            return res.status(401).json({
                success:false,
                messgae:"This is the protected route for admin"
            })
        }
        next();
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            messgae:"facing error while authenticating the user"
        })
    }
}