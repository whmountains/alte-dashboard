exports.readSensors = function() {

  try {
    var b = require('octalbonescript')
  }
  catch (e) {} // we'll manually check for errors

  if (b) {
    return {
      pressure: getRandomInt(25, 125)
    }
  }
  else { // octalbonescript is not installed
    return {
      pressure: getRandomInt(25, 125)
    }
  }
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
