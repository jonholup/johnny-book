var express = require('express');
var router = express.Router();
var likeObject = {jonny: 0, paige: 0, sam: 0, christine: 0};

router.get('/', function(req, res){
  res.send(likeObject);
});

router.post('/jonny', function(req, res){
  var jonnyLikes = parseInt(req.body.like);
  likeObject.jonny += jonnyLikes;
  console.log(likeObject);
  res.sendStatus(200);
});

router.post('/paige', function(req, res){
  var paigeLikes = parseInt(req.body.like);
  likeObject.paige += paigeLikes;
  res.sendStatus(200);
});

router.post('/sam', function(req, res){
  var samLikes = parseInt(req.body.like);
  likeObject.sam += samLikes;
  res.sendStatus(200);
});

router.post('/christine', function(req, res){
  var christineLikes = parseInt(req.body.like);
  likeObject.christine += christineLikes;
  res.sendStatus(200);
});





module.exports = router;
