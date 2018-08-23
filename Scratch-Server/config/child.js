
const pythonPath = "C:/Users/LEESANGYUN/Anaconda3/python";
// const pythonScript = "../../python-api-develop/main.py";
const pythonScript = "C:/Users/LEESANGYUN/Desktop/Scratch-Server/python-api-develop/main.py";

const child_process = require('child_process').spawn;
const child = child_process(pythonPath,[pythonScript],{stdio : 'pipe'});

child.stdin.setDefaultEncoding('utf8');
child.stdout.setDefaultEncoding('utf8');
// child.stdout.pipe(process.stdout);

child.stderr.on('data', function(data){
    console.log('child-process error : '+ data);
});

var uint8arrayToString = function(data){
    return String.fromCharCode.apply(null, data);
};

module.exports = child;