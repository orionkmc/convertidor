module.exports.toFahrenheit = function(temperature){
  return (temperature * 9/5) + 32;
};

module.exports.toCelcius = function(temperature){
  return (temperature -32 ) * 5/9;   
};