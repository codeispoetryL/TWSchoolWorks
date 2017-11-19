'use strict';

function get_integer_interval_2(number_a, number_b) {

  var result = [];

  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
  } else if (number_a > number_b) {
    for (var j = number_a; j >= number_b; j--) {
      if (j % 2 === 0) {
        result.push(j);
      }
    }
  } else {
    if (number_b % 2 === 0) {
      result.push(number_b);
    } else return[];
  }

  return result;
}

module.exports = get_integer_interval_2;
