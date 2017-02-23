var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var likes = require('./routes/likes.js');
var bios = require('./routes/bios.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/likes', likes);
app.use('/bios', bios);


app.listen(5000);
