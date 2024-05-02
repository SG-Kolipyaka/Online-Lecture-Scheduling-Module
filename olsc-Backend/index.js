const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const {adminRouter}=require("./Routes/admin.routes")
const {instructorRouter}=require("./Routes/instructor.routes")
const {courseRouter}=require("./Routes/courses.route")
require('dotenv').config()
const app=express()


app.use(cors()) 
app.use(express.json())
app.use("/instructor",instructorRouter)
app.use('/admins',adminRouter)
app.use("/courses",courseRouter)


app.get("/",async(req,res)=>{
    try{
res.status(200).send({"Message":"Home Route"})
    }catch(error){
res.status(401).send({"Message":error.message})
    }
})


app.listen(process.env.PORT,async()=>{
    try{
await connection
console.log(`Connected to DB ${process.env.PORT}`)
    }catch(error){
console.log(error)
    }
})