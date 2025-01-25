import express from "express";
import * as UserController from "../src/controllers/UserController.js"




const router=express.Router();


router.post('/Register',UserController.Register);
router.post('/Login',UserController.Login);



export default router;


