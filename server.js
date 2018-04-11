var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home page.html'));
});
app.get("/newpage",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'newpage.html'));
}); 
app.get("/secondpage",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'secondpage.html'));
});
app.get("/thirdpage",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'thirdpage.html'));
    
});
app.get("/fourthpage",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'fourthpage.html'));
    
});
app.get("/fifthpage",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'fifthpage.html'));
    
});
app.get("/sixpage",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'sixpage.html'));
});

app.get("/sevenpage",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'sevenpage.html'));
}); 

    
app.get("/about",function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'about.html'));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/library3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'library3.jpg'));
});
app.get('/ui/libraryB.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'libraryB.jpg'));
});
app.get('/ui/png1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'png1.jpg'));
});
app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});
app.get('/Loginpage1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'LoginPage1.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
