var express =require('express');
var {studentmodel}=require('../models/studentmodel');

const router =express.Router();

router.get('/',(req,res)=>{
 res.send("hai..");
});
router.post('/reg',async(req,res)=>{
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
router.get('/viewall',async(req,res)=>{
    try {
        var result =await studentmodel.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
router.post('/search',async(req,res)=>{
    try {
        studentmodel.find(req.body,(error,data)=> {
            if (error) {
                throw error;
            } else {
                res.send(data);
            }

        });
        res.send(result);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
module.exports=router ;