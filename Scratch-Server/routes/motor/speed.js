var express = require('express');
var router = express.Router();

var child = require('../../config/child.js');

router.post('/',function(req,res){
    let num = req.body.NUM;
    let u_speed = req.body.UP_SPEED;
    let d_speed = req.body.DOWN_SPEED;

    child.stdin.write(
    'for i in range(0,10):'+
    '\rm.motors['+num+'].first_speed('+u_speed+')'
    +'\rtime.sleep(0.02)'+
    '\nfor i in range(0,10):'+
    '\rm.motors['+num+'].second_speed('+d_speed+')'
    +'\rtime.sleep(0.02)\r\n'
        ,function(err,results){
        if(err){
            res.status(500).send({
                message: "server error"
            });
        }
        else{
            res.status(200).send({
                message: "speaker on Success"
            });
        }
    });

});

module.exports = router;
