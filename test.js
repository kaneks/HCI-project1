var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var express = require('express');


app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

//Create a new user with name

http.listen(3000, function () {
	console.log('listening on 3000');
});
