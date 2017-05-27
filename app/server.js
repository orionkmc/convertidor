
var  express = require('express');
var  convertidor = require('..');

var app = express();

app.get('/toCelsius', function (req, res) {
  var temperature = req.query.temperature;
  res.send(200, convertidor.toCelsius(temperature) );
})

app.get('/toFahrenheit', function (req, res) {
  var temperature = req.query.temperature;
  res.send(200, convertidor.toFahrenheit(temperature) );
})


app.listen(3000, function (err){
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('escuchando en el puerto 3000');
});