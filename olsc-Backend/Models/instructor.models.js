const mongoose=require("mongoose")

const InstructorSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    subject:{type:String,required:true},
},{
    versionKey:false
})


const InsrtuctorModel=mongoose.model("instructor",InstructorSchema)


module.exports={
    InsrtuctorModel
}