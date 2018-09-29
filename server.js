#!/usr/bin/env node
var express = require('express');
var http = require('http');

var router = require("./serverside/routes");

//Create our app
var app= express();
const PORT=3000;

app.use((req,res,next)=>{
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect("http://"+req.hostname+req.url);
    }else{
        next();
    }
});

app.use(express.static('./public'));

app.use("/get",router);

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});




var server = app.listen(PORT,()=>{
    console.log("Express server is up on port: "+PORT);
});
