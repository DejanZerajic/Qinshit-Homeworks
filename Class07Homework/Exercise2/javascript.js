let result;

function weightInChickens() {
  let humanKilograms = parseInt(prompt("Enter your weight in kilograms"));
  if (humanKilograms <= 0) {
    let finalWeight = document.getElementById("result");
    finalWeight.textContent += `Enter positive number`;
  } else result = humanKilograms / 0.5;
}

let finalWeight = document.getElementById("result");
finalWeight.textContent += `Your weight in chicken meat is ${final} kilograms`;
weightInChickens();

//Ne sum pameten da kazam kade gresam, bidejki ova ne raboti.
