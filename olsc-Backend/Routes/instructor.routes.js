const {InsrtuctorModel}=require("../Models/instructor.models")
const {Router}=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const instructorRouter=Router()

instructorRouter.post("/register",async(req,res)=>{
    const {name,email,age,password,subject}=req.body
    
    try{
        const finduser=await InsrtuctorModel.findOne({email})
        if(finduser){
            res.status(200).send({"msg":"Instructor already Registered Please Login"})
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                const user=InsrtuctorModel({name,email,age,password:hash,subject})
                await user.save()
                res.status(200).send({"msg":"Instructor Registered Successfully"})
            })
        }
    }catch(er){
        res.status(401).send({"msg":er})
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
                   res.status(200).send({"msg":"Login Successfully","token":token})
                }else{
                    res.status(200).send({"msg":"Wrong Credential"}) 
                }
            })
        }else{
            res.status(200).send({"msg":"Wrong Credential"}) 
        }
    }catch(er){
        res.status(401).send({"msg":er.message}) 
    }
})

module.exports={
    instructorRouter
}