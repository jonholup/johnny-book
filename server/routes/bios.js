var express = require('express');
var router = express.Router();

var usArray = [
{
  name: 'jonny',
  bio: 'creator of jonnybook, prom king',
  image: '../assets/images/jonny.jpg'
},
{
  name: 'paige',
  bio: 'merp',
  image: '../assets/images/paige.jpg'
},
{
  name: 'sam',
  bio: 'sam has a reputation on linkedin',
  image: '../assets/images/sam.jpg'
},
{
  name: 'christine',
  bio: 'Christine is pretty convinced she\'s a cat',
  image: '../assets/images/christine.png'
}
];

router.get('/', function(req, res) {
  res.send(usArray);
});


module.exports = router;
