import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    email:{type:String,unique:true,required:true,lowercase:true,trim: true},
    userName:{type:String,required:true,lowercase:true,trim: true},
    password:{type:String,required:true,trim: true}

}, {timestamps: true, versionKey: false});

const UserModel=mongoose.model('users', DataSchema);

export default UserModel;