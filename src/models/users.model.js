import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username :{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    age: {
        type:Number,
    },
    password:{
        type:String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true
    }
   
});

export const userModel = mongoose.model("users", userSchema);