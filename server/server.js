"use strict";
exports.__esModule = true;
var redis = require("redis");
var connectRedis = require("connect-redis");
var express = require("express");
var session = require("express-session");
var ideaRoute_1 = require("./ideaAPI/ideaRoute");
var app = express();
var port = 3000;
var RedisStore = connectRedis(session);
var client = redis.createClient();
client.on('error', function (err) { console.log('Error ' + err); });
app.use(session({
    store: new RedisStore({ client: client }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: true
    }
}));
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.use('/birds', ideaRoute_1["default"]);
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
app.post('/', function (req, res) {
    res.send('Got a POST request');
});
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});
app["delete"]('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});
app.use(express.static('public'));
