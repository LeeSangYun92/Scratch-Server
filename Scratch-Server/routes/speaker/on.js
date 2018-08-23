var express = require('express');
var router = express.Router();

var child = require('../../config/child.js');

router.post('/',function(req,res){
    let num = req.body.NUM;
    let volume = req.body.VOLUME;

    child.stdin.write('for i in range(0,5)\:\
    m.speakers['+num+'].volume('+volume+')\r\n',function(err,results){
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
