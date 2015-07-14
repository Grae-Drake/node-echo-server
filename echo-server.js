var express = require('express');

var app = express();

app.get('/', function(request, response) {
    //console.log(request.get('User-Agent'));
    response.json(request.get('User-Agent'));
});

app.get('/headers', function(request, response) {
    response.json(request.headers);
});

app.get('/headers/:headerName', function(request, response) {
    response.json(request.get(request.params.headerName));
});



app.listen(8080);