var express = require('express');
var sqlConfig = require('./src/configs/dbconfig');
var app = express();
// const api = require('./api');
const manufacturersRouter = require('./src/routes/manufacturers');
const modelsRouter = require('./src/routes/models');

app.use('/api/manufacturers', manufacturersRouter);
app.use('/api/models', modelsRouter);
 
app.listen(5000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 5000);
});