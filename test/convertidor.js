/**
* Module dependencies
*/

var expect = require('chai').expect;

describe('Temperature Conversor', function(){
  // Test para comprobar el metodo toFahrenheit 
  describe('Celciusto to Fahrenheit conversion', function(){
    it('Converts 100C to Fahrenheit', function(){
      var fh = convertidor.toFahrenheit(100);
      expect(fh).to.equal(212)
    });
  });

  // Test para comprobar el metodo toCelciusto
  describe('Fahrenheit to Celciusto conversion', function(){
    it('Converts 212F to Celciusto', function(){
      var fh = convertidor.toCelciusto(212);
      expect(fh).to.equal(100)
    });
  });

});