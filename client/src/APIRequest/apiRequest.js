import axios  from 'axios';

export const RegisterAPI= async(req,res)=>{
    
        let response= await axios.post('http://localhost:8000/api/Register',req) 
        if(response){
            return response.data
        }
        else{
            return []
        }
}

export const LoginAPI= async(req,res)=>{
    
    let response= await axios.post('http://localhost:8000/api/Login',req) 
    console.log(response)

    if(response){
        return response.data
    }
    else{
        return []
    }
}

