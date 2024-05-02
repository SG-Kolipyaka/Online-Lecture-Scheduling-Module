const {AdminModel}=require("../Models/admin.models")
const {Router}=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const adminRouter=Router()

adminRouter.post("/register",async(req,res)=>{
    const {name,email,age,password}=req.body
    
    try{
        const finduser=await AdminModel.findOne({email})
        if(finduser){
            res.status(200).send({message:"admin already Registered Please Login"})
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                const user=AdminModel({name,email,age,password:hash})
                await user.save()
                res.status(200).send({message:"admin Registered Successfully"})
            })
        }
    }catch(er){
        res.status(401).send({message:er.message})
    }
})


adminRouter.get("/getadmins",async(req,res)=>{
    try{
const admin=await AdminModel.find()
res.status(200).send({message:"admin Fetched Successfully",data:admin})
    }catch(error){
res.status(401).send({message:error.message})
    }
})



adminRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const finduser=await AdminModel.findOne({email})
        if(finduser){
            bcrypt.compare(password, finduser.password,(err,result)=>{
                if(result){
                    const token=jwt.sign({admin:finduser.name,adminId:finduser._id},"admin");
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
    adminRouter
}