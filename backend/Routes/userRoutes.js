const express=require("express");
const router=express.Router();
const{addUser} =require("../Controllers/usercontroller")


router.post("/adduser",addUser);
