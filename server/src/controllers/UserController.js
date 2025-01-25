import {LoginServices, RegisterServices} from '../services/UserServices.js';

export const Register= async (req, res)=>{
    let result= await RegisterServices(req);
    res.status(200).json(result);
}

export const Login= async (req, res)=>{
    let result= await LoginServices(req);
    res.status(200).json(result);
}

