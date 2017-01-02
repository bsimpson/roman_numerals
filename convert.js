// TODO You can only subtract a power of ten, and only from the next two higher "digits". The digits are {I, V, X, L, C, D, M}.
// node -e "console.log(require('./convert.js')(1990))" # => MDCDLXL
module.exports = function(number) {
  var mapping = [
    { key: 1000 , value: "M" },
    { key: 500  , value: "D" },
    { key: 100  , value: "C" },
    { key: 50   , value: "L" },
    { key: 10   , value: "X" },
    { key: 5    , value: "V" },
    { key: 1    , value: "I" }
  ],
  output = [];

  return function toRoman(number) {
    mapping.forEach(function(obj, _) {
      while (number >= obj.key) {
        output.push(obj.value);
        number -= obj.key;
      }
    });

    applySubtractiveNotation();

    return output.join('');
  }(number);

  function applySubtractiveNotation() {
    output.forEach(function(numeral, index) {
      if (nextFourMatch(index)) {
        output.splice(index, 4, numeral, nextNumeral(numeral));
      }
    });
  }

  function nextFourMatch(index) {
    var nextFour = output.slice(index, index+4);
    return ( (nextFour[0] == nextFour[1]) && (nextFour[1] == nextFour[2]) && (nextFour[2] == nextFour[3]) );
  }

  function nextNumeral(numeral) {
    var nextNumeral;
    mapping.forEach(function(obj, idx) {
      if (obj.value == numeral) {
        nextNumeral = mapping[idx-1].value;
      }
    });
    return nextNumeral;
  }
}
