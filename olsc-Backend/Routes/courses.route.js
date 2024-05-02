const {AssignedModel,CourseModel}=require("../Models/courses.models")
const {adminAuth}=require("../Middlewares/adminAuth")
const {Router}=require("express")
const courseRouter=Router()


courseRouter.post("/assignlectures",adminAuth, async (req, res) => {
    try {
        const { instructorId, date } = req.body;
        const existingAssignment = await AssignedModel.findOne({ instructorId, date });
        if (existingAssignment) {
            res.status(400).send({ message: "The instructor is already assigned a lecture for the selected date. Please select a different date or a different instructor." });
        } else {
            const newAssignment = new AssignedModel(req.body);
            await newAssignment.save();
            res.status(200).send({ message: "Lecture assigned successfully." });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


courseRouter.get("/getassigned",async(req,res)=>{
    try{
        const lectures =await AssignedModel.find()
        res.status(200).send({message:"Data Fetched Successfully", data:lectures})
    }catch(error){
res.status(401).send({message:error.message})
    }
})

courseRouter.post("/addcourses",adminAuth,async(req,res)=>{
    const {name}=req.body
    try{
        const existingcourse = await CourseModel.findOne({ name });
        if (existingcourse) {
            res.status(400).send({ message: "Course With the name already exists" });
        } else {
            const newCourse = new CourseModel(req.body);
            await newCourse.save();
            res.status(200).send({ message: "Course Added Successfully" ,data:newCourse});
        }

    }catch(error){

    }
})


courseRouter.get("/getcourses",adminAuth,async(req,res)=>{
    try{
const courses=await CourseModel.find()
res.status(200).send({message:"Courses Fetched Successfully",data:courses})
    }catch(error){
res.status(401).send({error:error.message})
    }
})


module.exports={
    courseRouter
}