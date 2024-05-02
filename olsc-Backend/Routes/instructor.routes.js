const {InsrtuctorModel}=require("../Models/instructor.models")
const {AssignedModel}=require("../Models/courses.models")
const {auth}=require("../Middlewares/auth")
const {Router}=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const instructorRouter=Router()

instructorRouter.post("/register",async(req,res)=>{
    const {name,email,age,password,subject}=req.body
    
    try{
        const finduser=await InsrtuctorModel.findOne({email})
        if(finduser){
            res.status(200).send({message:"Instructor already Registered Please Login"})
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                const user=InsrtuctorModel({name,email,age,password:hash,subject})
                await user.save()
                res.status(200).send({message:"Instructor Registered Successfully"})
            })
        }
    }catch(er){
        res.status(401).send({message:er.message})
    }
})


instructorRouter.get("/getinstructors",async(req,res)=>{
    try{
const instructor=await InsrtuctorModel.find()
res.status(200).send({message:"Instructor Fetched Successfully",data:instructor})
    }catch(error){
res.status(401).send({message:error.message})
    }
})


instructorRouter.get("/assigned/:id",auth,async(req,res)=>{
    const {id}=req.params
    try{
const instructor=await AssignedModel.find({instructorId:id})
res.status(200).send({message:"Instructor Fetched Successfully",data:instructor})
    }catch(error){
res.status(401).send({message:error.message})
    }
})


instructorRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const finduser=await InsrtuctorModel.findOne({email})
        if(finduser){
            bcrypt.compare(password, finduser.password,(err,result)=>{
                if(result){
                    const token=jwt.sign({instructor:finduser.name,instructorId:finduser._id},"instructor");
                   res.status(200).send({message:"Login Successfully","token":token})
                }else{
                    res.status(200).send({message:"Wrong Credential"}) 
                }
            })
        }else{
            res.status(200).send({message:"Wrong Credential"}) 
        }
    }catch(er){
        res.status(401).send({message:er.message}) 
    }
})

module.exports={
    instructorRouter
}