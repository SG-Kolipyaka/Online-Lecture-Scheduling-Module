const mongoose=require("mongoose")

const AdminSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true}
},{
    versionKey:false
})


const AdminModel=mongoose.model("admin",AdminSchema)


module.exports={
    AdminModel
}