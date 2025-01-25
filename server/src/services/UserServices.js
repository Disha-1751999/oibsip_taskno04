import  UserModel from '../models/UserModel.js';
import { TokenEncode } from '../utilities/tokenUtility.js';





export const RegisterServices= async (req, res)=>{

    try {
        let reqBody= req.body;
        let data= await UserModel.create(reqBody);
        return {status:"success", message:"User Registered", "data":data}
    } catch (error) {
        return {status:"fail", message:error.toString()}
    }
   
}

export const LoginServices= async (req, res)=>{

    try {
        let reqBody= req.body;
        let user= await UserModel.findOne(reqBody);
        if(user){
            let email=user.email;
            let Id=user._id;
            let token=TokenEncode(Id,email)
            return {status:"success", message:"User Logged in successfully..!", "token": token}
        }else{
            return {status:"fail", message:"User not registered"} 
        }       

    } catch (error) {
        return {status:"fail", message:"failed "}
    }
    

}

