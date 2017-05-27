/**
* Module dependencies
*/

var expect  = require('chai').expect;
var axios   = require('axios');

describe('Temperature Converter API', function() {

  describe('Celsius to Fahrenheit conversion', function(){
    it('return status 200', function(){
      axios
        .get('http://localhost:3000/toFahrenheit?Temperature=100')
        .then(function(){
          expect(res.status).to.equal(200);
        });
    });
    it('return 100C in Fahrenheit', function(){
      axios
        .get('http://localhost:3000/toFahrenheit?Temperature=100')
        .then(function(){
          expect(res.data).to.equal(212);
        });
    });
  });

  describe('Fahrenheit to Celsius conversion', function(){
    it('return status 200', function(){
      axios
        .get('http://localhost:3000/toCelsius?Temperature=212')
        .then(function(){
          expect(res.status).to.equal(200);
        });
    });
    it('return 100C in Fahrenheit', function(){
      axios
        .get('http://localhost:3000/toCelsius?Temperature=212')
        .then(function(){
          expect(res.data).to.equal(100);
        });
    });
  });
});