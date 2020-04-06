var express =require('express');
var parser =require('body-parser');
var mongoose =require('mongoose');

var app =express();
app.use(parser.urlencoded({extended:false}));
const studentSchema = new mongoose.Schema(
    {
        name:String,
        roll:Number,
        adNo:Number,
        clg:String
    }
);
const studentmodel =mongoose.model('students',studentSchema);
mongoose.connect("mongodb+srv://7ananthan:godisgrea7@cluster0-fcx3v.mongodb.net/test?retryWrites=true&w=majority");

app.get('/',(req,res)=>{
    res.send("hai..");
});
app.post('/reg',async(req,res)=>{
    try {
        var studentdata= new studentmodel(req.body);
        var result= await studentdata.save();
        res.json(result);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);     
    }
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
});