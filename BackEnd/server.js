var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://aran:ireland1@ds151453.mlab.com:51453/aran'; //i have put in my on Mlabs Username and password
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var movieSchema = new Schema({
    title: String,
    content: String,
    slider: String
})
var movieModel = mongoose.model('movie', movieSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/movie', function(req, res){
    console.log("movie successful");
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.slider);

    movieModel.create({
        title: req.body.title,
        content: req.body.content,
        slider: req.body.slider
    });
    res.send('Item added');


})

app.get('/api/movie', function(req, res){
    movieModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/movie/:id', function(req, res){
    console.log("Read movie " +req.params.id);

    //PostModel.find({_id : req.params.id}, 
    movieModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/movie/:id', function(req, res){
    console.log("Update movie" +req.params.id);
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.slider);

    movieModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/movie/:id', function(req, res){
    console.log(req.params.id);

    movieModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})