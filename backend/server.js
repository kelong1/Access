const express=require("express")
const app =express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const RouterUrls=require("../backend/Routes/userRoutes")


dotenv.config()

mongoose.connect(process.env.MONGO_DB, console.log("Connected to mongo Successful"))

app.use(express.json())
app.use(cors())
app.use("/app/users",RouterUrls)


app.listen(process.env.PORT,()=>console.log("Port is listening at 8800"))