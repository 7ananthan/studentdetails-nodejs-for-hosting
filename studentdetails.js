var express =require('express');
var bodyParser =require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended: false}))

app.post('/',(req, res )=>{

    var name =req.body.getname;
    var roll =req.body.getroll;
    var adminNo=req.body.getadminNo;
    var college=req.body.getclg;

    res.json(req.body);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});