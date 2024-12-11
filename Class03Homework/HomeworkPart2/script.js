/* Ova e poednostavnata verzija
function calculatedogAge() {
  let input = prompt("Enter your dog's age:");
  let dogAge = parseInt(input);
  if (dogAge >= 20 || dogAge <= 0) {
    console.error(`Immprobable age, please enter a number between 1 and 19`);
  } else {
    console.log(`Your dog's age in human terms is ${dogAge * 7} years`);
  }
}

calculatedogAge();
*/

//ova e so input
function convertAge() {
  let conversionChoice = prompt(
    "Convert dog years to human years\n or human years to dog years\n (enter 1) or (enter 2)"
  );

  let input = prompt("Enter the age you want to convert:");
  let input2 = parseInt(input);

  if (conversionChoice === "1") {
    let dogAge = age * 7;
    console.log(`Your dog is ${dogAge} years old in human years.`);
  } else if (conversionChoice === "2") {
    let humanYears = age / 7;
    console.log(
      `Your dog is approximately ${humanYears} years old in human years.`
    );
  } else {
    console.log("Invalid input. Please try again.");
  }
}

convertAge();
