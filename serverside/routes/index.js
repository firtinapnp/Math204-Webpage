var express = require('express');
var router = express.Router();


router.route('/')
.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req,res,next){
    res.end('This is the get request');
})


module.exports = router;
