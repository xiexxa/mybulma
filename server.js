const express = require('express');
const app = express();
//const LedMatrix = require("easybotics-rpi-rgb-led-matrix");

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
//app.get('/', (req, res) => res.sendFile(__dirname+'/dist/index.html'));

app.listen(3000, () => console.log('3000'));
//matrix = new LedMatrix(16, 32, 1, 3, 50, 'adafruit-hat');

app.get('/',
    function(req, res) {
        //matrix.clear();
        //matrix.update();
        //matrix.fill(255, 0, 0);
        //matrix.update();
        res.sendFile(__dirname + '/dist/mypage.html');
    }
);