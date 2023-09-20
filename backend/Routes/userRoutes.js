const express=require("express");
const router=express.Router();
const{RegisterUser,loginUser,getMe} =require("../Controllers/usercontroller")


router.post("/register",RegisterUser);
router.post("/login",loginUser);
router.get("/me",getMe)

module.exports=router;
