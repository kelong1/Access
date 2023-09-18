const mongoose=require("mongoose");

const accessSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add the name Field"]
    },
    email:{
        type:String,
        required:[true,"Please add the Email Field"]
    },
    password:{
        type:String,
        required:[true,"Please add the password Field"]
    }
})

module.exports=mongoose.model("accessusers",accessSchema)