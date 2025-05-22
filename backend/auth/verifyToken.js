import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req,res,next) => {
    //get token from headers
    const authToken = req.headers.authorization

    //check token is eists 
    if(!authToken || !authToken.startsWith('Bearer')){
        return res
        .status(401)
        .json({success:false, message :" No Token,authorization denied"})
    }

    try{
        const token = authToken.split(' ')[1];

     //verify token
     const decoded =jwt.verify(token,process.env.JWT_SECRET_KEY)
     
     req.userId =decoded.id
     req.role=decoded.role
     
     next(); //must be call the next function

    }catch (err){

        if(err.name ==='TokenExpriredError'){
            return res.status(401).json({message:'Token isexpired'})
        }
        return res.status(401).json({ success:false,message:'Invalid Token '})
    }
};

export const restrict = (roles) => {
    return async (req, res, next) => {
      const userId = req.userId;
  
      try {
        let user;
  
        const patient = await User.findById(userId);
        const doctor = await Doctor.findById(userId);
  
        if (patient) {
          user = patient;
        } else if (doctor) {
          user = doctor;
        }
  
        if (!user || !roles.includes(user.role)) {
          return res.status(403).json({
            success: false,
            message: "You're not authorized to access this route"
          });
        }
  
        next();
      } catch (err) {
        return res.status(500).json({ success: false, message: "Authorization failed" });
      }
    };
  };
  