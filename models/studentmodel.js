var mongoose =require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name:String, 
        roll:Number,
        adNo:Number,
        clg:String
    }
);
const studentmodel =mongoose.model('students',studentSchema);
module.exports={studentmodel}