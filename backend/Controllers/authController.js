
// import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt  from "bcryptjs";

export const register =async(req,res)=>{

    const{email,password,name,role,photo,gender}=req.body
    try{

        let user= null 

        if(role==='patient'){
            user = await User.findOne({email})
        }
        else if(role==='doctor'){
            user = await Doctor.findOne({email})
        }

        //check if user exist

        if(user){
            return res.this.status(400).json({message:"User already exists"})
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hassPassword =await bcrypt.hash(password,salt)

        if(role==='patient'){
            user = new User({
                name,
                email,
                password:hassPassword,
                photo,
                gender,
                role
            })
        }

        
        if(role==='doctor'){
            user = new Doctor({
                name,
                email,
                password:hassPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()

        res.state(200).json({success:true,message:"User succsessfully created"})

    } catch (err){
        res.state(500).json({success:false,message:"Internal server error ,Try again "})
    }
    
}

export const login =async(req,res)=>{
    try{
      
    } catch (err){

    }
    
}