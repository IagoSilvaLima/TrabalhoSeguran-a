var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var consign = require('consign');
var Sequelize = require('sequelize');


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.listen('9878',function(){
    console.log('servidor no ar');
});




consign()
    .include('config')
    .then('models')
    .then('routes')
    .into(app);