/**
 * Created with meadowlark.
 * User: dariuszDev
 * Date: 2014-12-09
 * Time: 02:40 PM
 * To change this template use Tools | Templates.
 */

var express = require('express');
var app = express();

// ./ <- is specified for node to search not inside node_modules
var fortune=require('./lib/fortune.js');

// set up handlebars view engine
var handlebars = require('express3-handlebars')
        .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){
   res.locals.showTests=app.get('env')  !== 'production' &&
       req.query.test ==='1';
    next();
});

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res) {
        res.render('home');
});
app.get('/about', function(req, res) {        
        res.render('about',{
            fortune:fortune.getFortune(),
            pageTestScript:'/qa/tests-about.js'
        });
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
        res.status(404);
        res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
});
app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});