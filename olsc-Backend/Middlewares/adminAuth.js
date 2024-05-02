const jwt=require("jsonwebtoken")

const adminAuth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        try{
            const decode=jwt.verify(token,"admin")
            if(decode){
                req.body.admin=decode.admin
                req.body.adminId=decode.adminId
                next()
            }else{
                res.status(200).send({"msg":"Please Login"}) 
            }
        }catch(er){
            res.status(200).send({"msg":er.message}) 
        }
    }else{
        res.status(200).send({"msg":"Please Login"}) 
    }
}


module.exports={
    adminAuth
}