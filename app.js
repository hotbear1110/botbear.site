const express = require('express');
const favicon = require('express-favicon');
const https = require('https');
const http = require('http');
const fs = require('fs');

var privateKey  = fs.readFileSync('../../../etc/letsencrypt/live/hotbear.xyz-0001/privkey.pem', 'utf8');
var certificate = fs.readFileSync('../../../etc/letsencrypt/live/hotbear.xyz-0001/fullchain.pem', 'utf8');

const app = express();

var credentials = {key: privateKey, cert: certificate};

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

httpServer.listen(8080);
httpsServer.listen(8443);