var express = require('express');
var router = express.Router();

var child = require('../../config/child.js');

router.post('/',function(req,res){
    let num = req.body.NUM;
    let r = req.body.R;
    let g = req.body.G;
    let b = req.body.B;

    child.stdin.write('for i in range(0,5):'
    +'\rm.leds['+num+'].rgb('+r+','+g+','+b+')\r\n',function(err,results){
        if(err){
            res.status(500).send({
                message: "server error"
            });
        }
        else{
            res.status(200).send({
                message: "led rgb Success"
            });
        }
    });

});
module.exports = router;
