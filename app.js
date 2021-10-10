const express = require('express');


const app = express();
const port = 5000;


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));


app.set('views', './src/views');
app.set('view engine', 'ejs');


const commandRouter = require('./src/routes/commands');

app.use('/', commandRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
