var express = require('express');
var router = express.Router();

var child = require('../../config/child.js');

router.post('/',function(req,res){
    let num = req.body.NUM;
    let msg = req.body.MSG;

    child.stdin.write('for i in range(1,2):'+
    '\rm.displays['+num+'].text("'+msg+'")\r\n',function(err,results){
        if(err){
            res.status(500).send({
                message: "server error"
            });
        }
        else{
            res.status(200).send({
                message: "led on Success"
            });
        }
    });
});


module.exports = router;
