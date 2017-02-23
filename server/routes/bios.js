var express = require('express');
var router = express.Router();

var usArray = [
{
  name: 'jonny',
  bio: 'bio',
  image: '../assets/images/jonny.png'
},
{
  name: 'paige',
  bio: 'bio',
  image: 'url'
},
{
  name: 'sam',
  bio: 'bio',
  image: 'url'
},
{
  name: 'christine',
  bio: 'bio',
  image: 'url'
}
];

router.get('/', function(req, res) {
  res.send(usArray);
});


module.exports = router;
