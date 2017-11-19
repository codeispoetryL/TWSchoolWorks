'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];

  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(i);
    }
  } else if (number_a > number_b) {
    for (var j = number_a; j >= number_b; j--) {
      result.push(j)
    }
  } else{
    result.push(number_a)
  }
  return result;
}

module.exports = get_integer_interval;

