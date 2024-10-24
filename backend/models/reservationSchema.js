import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain atleast 3 character"],
        maxLength:[30,"First name can not exceed 30 character"],
    },

    lastName:{
        type:String,
        required:true,
        minLength:[3,"last name must contain atleast 3 character"],
        maxLength:[30,"last name can not exceed 30 character"],
    },

    email:{
        type:String,
        required:true,
       validate:[validator.isEmail,"provide valid email!"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must contain 10 digit"],
        maxLength:[10,"Phone number must contain 10 digit"],
    }, 
    time:{
        type:String,
        required:true,
      
    }, 
    date:{
        type:String,
        required:true,
    
    }, 
    

});
export const Reservation = mongoose.model("Reservation" ,reservationSchema )