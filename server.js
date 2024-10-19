var express =require('express');
var app =express();

 app.use(express.static('public'));
 
 app.set('view engine','ejs');
 app.set('views','./views');

 var entrance = require('./entrance.js');
 var cont = require('./cont.js');
 var know = require('./know.js');


 app.use('/',entrance);
 app.use('/cont',cont);
 app.use('/know',know);

 app.listen(4040);