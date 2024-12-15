/*HOMEWORK #2

Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert */

function sumArray(numbers) {
  //definiram funkcija za vnes na 5 proevi vo nizata, ako ne se 5, javuva greska
  if (numbers.length !== 5) {
    alert("Please enter numbers.");
    return;
  }

  let sum = 0; //pocnuva so postavuvanje na sumata na 0
  for (let i = 0; i < numbers.length; i++) {
    //iteratorot e postaven na nula, mora da e pomal od brojot na clenovi na nizata, da se zgolemuva za eden
    sum += numbers[i]; //sumata = se zgolemuva so zgolemuvanje na iteratorot
  }
  return sum;
}

const numbers = [11, 22, 33, 44, 55]; //stavam numbers vo nizata
const result = sumArray(numbers);

console.log("The sum is:", result);
