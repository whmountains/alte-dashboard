"use strict";

const b = require('octalbonescript')

exports.readSensors = function() {

  return {
    pressure: getRandomInt(25, 125)
  }

}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
