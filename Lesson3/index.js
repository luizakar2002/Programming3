/*
console.log("Hello");
var os = require("os");
var message = "The platform is ";

function main(){
   console.log(message + os.platform());
}
main();
*/

var express = require("express");
var app = express();

app.get("/google/:search", function(req, res){
   
    var search = req.params.search;
    res.redirect('http://google.com/search?q=' + search)
 });
 

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

