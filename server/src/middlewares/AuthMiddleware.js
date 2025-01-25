import {TokenDecode} from "../utilities/tokenUtility.js";

export default (req, res, next) => {

    let token=req.headers['token']
    let decoded=TokenDecode(token)
      
    if (decoded===null){
        res.status(401).send({status:"fail",message:"Unauthorized"})
    }

    else {
        let Id=decoded.Id;
        let email=decoded.email;
       
        req.headers.Id=Id;
        req.headers.email=email;
        
        next()
    }
}
