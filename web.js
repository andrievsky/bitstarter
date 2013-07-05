var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
//init
const filePath = "index.html";
var content = "Processing..."

// var reader = fs.readFile(filePath, { flag: 'r', encoding: "utf-8" }, function (err, data) 
// 	{
// 		if (err) throw err;
// 		console.log("Read "+filePath+" complete");
// 		content = data;
// 	});

app.get('/', function(request, response) {
	fs.readFile(filePath, { flag: 'r', encoding: "utf-8" }, function (err, data) 
	{
		if (err) throw err;
		console.log("Read "+filePath+" complete");
		content = data;
		response.send(content);
	});
	
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});