

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

let friends = ['Norman', 'David', 'Ezekiel', 'Chris', 'Vivian'];



app.get("/", function(req, res){
   res.redirect("/friends"); 
});


app.get("/friends", function(req, res){
   res.render("friends.ejs", {friends: friends});
});


app.post("/addFriend", function(req, res){
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});




app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server up and running on...Some Fn port!"); 
});


