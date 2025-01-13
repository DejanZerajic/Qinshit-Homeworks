const numberInput = document.getElementById("numberInput");
const wordOutput = document.getElementById("wordOutput");

numberInput.addEventListener("input", () => {
  const number = numberInput.value.trim();
  if (number === "" || isNaN(number)) {
    wordOutput.value = "Invalid input. Please enter a valid number.";
  } else {
    wordOutput.value = convertNumberToWords(number);
  }
});

function convertNumberToWords(number) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const thousands = ["", "thousand", "million", "billion", "trillion"];

  if (parseInt(number) === 0) return "zero";

  let word = "";
  let numStr = number.toString();

  let chunks = [];
  while (numStr.length > 0) {
    chunks.unshift(numStr.slice(-3));
    numStr = numStr.slice(0, -3);
  }

  chunks.forEach((chunk, i) => {
    const chunkNum = parseInt(chunk);
    if (chunkNum === 0) return;

    let chunkWords = "";

    if (Math.floor(chunkNum / 100) > 0) {
      chunkWords += ones[Math.floor(chunkNum / 100)] + " hundred ";
    }

    const remainder = chunkNum % 100;
    if (remainder >= 10 && remainder <= 19) {
      chunkWords += teens[remainder - 10] + " ";
    } else {
      if (Math.floor(remainder / 10) > 1) {
        chunkWords += tens[Math.floor(remainder / 10)] + " ";
      }
      if (remainder % 10 > 0) {
        chunkWords += ones[remainder % 10] + " ";
      }
    }

    word += chunkWords + thousands[chunks.length - 1 - i] + " ";
  });

  return word.trim();
}
