const express = require('express');
const favicon = require('express-favicon');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('./cert/privkey.pem');
var certificate = fs.readFileSync('./cert/fullchain.pem');

var credentials = { key: privateKey, cert: certificate };

const app = express();
const port = 2053;

app.use(favicon(__dirname + '/public/img/LETSPEPE.png'));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));


app.set('views', './src/views');
app.set('view engine', 'ejs');


const commandRouter = require('./src/routes/commands');

app.use('/', commandRouter);


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(2053);