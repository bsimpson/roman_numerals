# Roman Numerals

This was an interesting challenge, and a good change to work with Javascript. The challenge is in
the subtractive notation that Roman Numerals incorporate. You can have "I", "II", "III", but "IIII" becomes "IV".
The side of the number that the "I" is on determines whether you add or subtract it from the next digit.

# Usage

```
 node -p "require('./convert.js')(1990)" # => MDCDLXL
 node -p "require('./convert.js')(2018)" # => MMXVIII
```

## Explanation

We pass in a number, and then while the highest Roman Numeral (1000) is less than
the number, we push a Roman Numeral onto the output array.

After all of the Roman Numerals are pushed onto the array, and nothing else can be subtracted,
we move onto the substitution phase. If the next four digits match, we substitute those entities
in the array with the next highest representation.

Each digit then goes through a check to compare its
value with the value of the next four digits. If the next four all match, we substitute
