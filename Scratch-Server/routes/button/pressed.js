var express = require('express');
var router = express.Router();
var async = require('async');

var child = require('../../config/child.js');

router.post('/', function(req,res){

    child.stdin.write('print(m.buttons[0].pressed())\r\n', function(err,results){
        if(err){
            res.status(500).send({
                message: "server error"
            });
        }
        else{
            child.stdout.once('data',function(data){
                // res.status(200).send({
                //     message: "button pressed success",
                //     datas : String.fromCharCode.apply(null, data)
                // });
                console.log(String.fromCharCode.apply(null, data));
                if(String.fromCharCode.apply(null, data) == 'True\r\n')
                {
                    console.log('1');
                    res.send('1');
                }
                else res.send('0');            
            });
        }
    });
});

module.exports = router;
