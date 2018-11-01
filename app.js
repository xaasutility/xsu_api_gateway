var env = require('dotenv').config();
var express = require('express');
var cors = require('cors');
var port = process.env.PORT || 8080;
var app = express();
var logger = require('morgan');

app.use(cors());
app.use(require('body-parser')());
app.use(logger('dev'));

app.use('/', require('./routes/index')(app));
app.use('/pricing', require('./routes/pricing')(app));

app.listen(port, function() {
    console.log('Server started... http://localhost:%d', port);
});
