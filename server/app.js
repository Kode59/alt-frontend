var express = require('express');
var app = express();

var morgan = require('morgan');

app.use(morgan('combined'));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/tiles', function (req, res) {
    res.json(
      {
          "tiles": [
              { "id": 1, "name":"Tile 1","url":"/tile1/","icon":""},
              { "id": 2, "name":"Tile 2","url":"/tile2/","icon":""},
              { "id": 3, "name":"Tile 3","url":"/tile3/","icon":""}
          ]
      }
    );
  });

app.post('/authenticate', function (req, res) {
    if(req.body && req.body.username && req.body.password === req.body.username){
        res.status(200).send({token : 'my-valid-token'});
    }else {
        res.status(401).send('');
    }
});

var PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('app listening on port ' + PORT));