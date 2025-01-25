import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoose from 'mongoose';
import expressFileUpload from 'express-fileupload';
import {MAX_JSON_SIZE,  REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE, DATABASE} from './src/config/config.js';
import router from './routes/api.js'



const app=express();


app.use(cookieParser());
app.use(cors());
app.use(helmet({
    crossOriginResourcePolicy: false
}));
app.use(hpp());
app.use(expressFileUpload());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended:  URL_ENCODE }));


// App Use Limiter
const limiter= rateLimit({windowMs: REQUEST_TIME,max: REQUEST_NUMBER})
app.use(limiter)

// Cache
app.set('etag',WEB_CACHE)

// Database Connect
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("MongoDB connected");
}).catch(()=>{
    console.log("MongoDB disconnected");
})



app.use("/api",router);
 
// Undefined Routing
app.get('*',function (req,res) {
    res.status(404).send({'message': ' Undefined Route '})
})




export default app;





