/*The example show below: the response is a string, if you want to send the response prettified, 
you could use something like JSON.stringify(anObject, null, 3)
It's important that you set the Content-Type header to application/json, too.
*/

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listProd', function (req, res) {
   fs.readFile( __dirname + "/" + "prod.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
//-------------------list the user by id

app.get('/listPrices', function (req, res) {
   fs.readFile( __dirname + "/" + "prices.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/listProd/:id', function (req, res) {
   // retrive all the users
   fs.readFile( __dirname + "/" + "prod.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
      // var user = data.prod[req.params.id-2].title //get user by key, which is Prod 2, ...
	   var user = data.products[req.params.id-2]//get user by key, which is Prod 2, ...
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

app.get('/listPrices/:id', function (req, res) {
   // retrive all the users
   fs.readFile( __dirname + "/" + "prices.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
      // var user = data.ads[req.params.id-5].title //get user by key, which is Price 5, ...
	   var user = data.ads[req.params.id-5]//get user by key, which is Price 5, ...
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Address is http://%s:%s", host, port)

})