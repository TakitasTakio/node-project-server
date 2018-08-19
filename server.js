var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var session = require('express-session');


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://projectsimon:ppp8989@ds119662.mlab.com:19662/project2018' ,{ useNewUrlParser: true });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.get('/', function(req, res) {
    res.send('Welcome to the final project 2018 node server!')
});

app.get('/message/:theMessage', function(req, res) {
    var theMessage = req.params['theMessage'];
    res.send(theMessage);
});

app.get('/api/session/set/:name/:value',
    setSession);
app.get('/api/session/get/:name',
    getSession);
app.get('/api/session/get',
    getSessionAll);
app.get('/api/session/reset',
    resetSession);

function setSession(req, res) {
    var name = req.params['name'];
    var value = req.params['value'];
    req.session[name] = value;
    res.send(req.session);
}

function getSession(req, res) {
    var name = req.params['name'];
    var value = req.session[name];
    res.send(value);
}
function getSessionAll(req, res) {
    res.send(req.session);
}
function resetSession(req, res) {
    res.session.destroy();
    res.send(200);
}





var adminService = require('./services/admin.service.server');
adminService(app);
var userService = require('./services/user.service.server');
userService(app);
var infoService = require('./services/info.service.server');
infoService(app);
var couchService = require('./services/couch.service.server');
couchService(app);
var info2Service = require('./services/info2.service.server');
info2Service(app);
var premService = require('./services/prem.service.server');
premService(app);
var premier2Service = require('./services/premier2.service.server');
premier2Service(app);
var courseService = require('./services/course.service.server');
courseService(app);

var unitService = require('./services/unit.service.server');
unitService(app);
var lessonService = require('./services/lesson.service.server');
lessonService(app);

var newsService = require('./services/news.service.server');
newsService(app);




var port = process.env.PORT || 7000;
app.listen(port, function() {
    console.log("Listening on " + port);
});