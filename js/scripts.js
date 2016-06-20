$(document).ready(function() {
  $("form#numberForm").submit(function() {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());

    var romanNumeral = numberToNumeral(number);

    $("#result").text(romanNumeral);
  })
})

function numberToNumeral(number) {
var numeral = "";
var numberString = number.toString().split('');
var digits = numberString.map(function(number) {
  return parseInt(number);
})
var lengthDigits = digits.length;

  var count = number;
  var ones = 0;


  //1000 to 3999
  if(count >= 1000) {
    thousands = Math.floor(count/1000);
    for (var i = 0; i < thousands; i++) {
      numeral = numeral + "M";
      count -= 1000;
    }
  }

  //900 to 999
  if (digits[lengthDigits - 3] === 9) {
    numeral = numeral + "CM";
    count -= 900;
  }

  //500 to 899
  if(count >= 500) {
    numeral = numeral + "D";
    count -= 500;
  }

  //400 to 499
  if((digits[lengthDigits - 3]) === 4) {
    numeral = numeral + "CD"
    count = count - 400;
  }

  //100 to 399
  if (count >= 100) {
    hundreds = Math.floor(count/100);
    count = count - hundreds * 100;
    for (var i = 0; i < hundreds; i++) {
      numeral = numeral + "C";
    }
  }

  //90 to 99
  if (digits[lengthDigits - 2] === 9) {
    numeral = numeral + "XC"
    count -= 90;
  }

  //50 to 89
  if(count >= 50) {
    numeral = numeral + "L";
    count -= 50;
  }

  //40 to 49
  if(digits[lengthDigits - 2] === 4) {
    numeral = numeral + "XL"
    count = count - 40;
  }

  //tens
  if (count >= 10) {
    tens = Math.floor(count/10);
    count = count - tens * 10;
    for (var i = 0; i < tens; i++) {
      numeral = numeral + "X";
    }
  }

  //last digit
  if ((digits[lengthDigits-1]) === 9) {
    numeral = numeral + "IX";
  } else if (count >= 5) {
    ones = count - 5;
    numeral = numeral + "V";
  } else if ((digits[lengthDigits-1]) === 4) {
    numeral = numeral + "IV"
  } else {
    ones = count;
  }

  //ones
  for (var i = 0; i < ones; i++) {
    numeral = numeral + "I";
  }

  return numeral;
}
