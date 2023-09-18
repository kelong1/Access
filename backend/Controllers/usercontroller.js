const accessSchema=require("../Models/userModel");

const addUser=async(req,res)=>{
    const user=await new accessSchema.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
}
await accessSchema.save()
.then(res.data)
.catch((error)=>console.error(error))

module.exports={
    addUser
}