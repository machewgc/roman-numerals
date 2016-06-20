## Synopsis

This is a program that transforms a number into a Roman Numeral.

Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000

## Code Example

N/A

## Motivation

To learn how to properly organize business logic and interface logic

## Rules

The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

## Tests

number is between 1 and 3
  Example input: 1
  Example output: I
the ones digit is equal to 4
  Example input: 4
  Example output: IV
the number is between 5 and 8
  Example input: 8
  Example output: VIII
the ones digit is equal to 9
  Example input: 9
  Example output: IX
the number is greater than or equal to 10
  Example input: 20
  Example output: XX
the tens digit is equal to 4
  Example input: 40
  Example output: XL
the tens digit is equal to 9
  Example input: 90
  Example output: XC

## License

N/A
