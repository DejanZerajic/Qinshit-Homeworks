let currentInput = "0";
let previousInput = "";
let operator = "";

const resultDisplay = document.querySelector(".result");

function updateDisplay() {
  resultDisplay.textContent = currentInput;
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    } else if (button.classList.contains("decimal")) {
      if (!currentInput.includes(".")) {
        currentInput += ".";
      }
    } else if (button.classList.contains("operator")) {
      operator = value;
      previousInput = currentInput;
      currentInput = "0";
    } else if (button.classList.contains("equal")) {
      calculateResult();
    } else if (button.classList.contains("clear")) {
      resetCalculator();
    } else if (button.classList.contains("backspace")) {
      backspace();
    }
    updateDisplay();
  });
});

function calculateResult() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  let result;
  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "x") result = num1 * num2;
  else if (operator === "÷") result = num2 === 0 ? "Error" : num1 / num2;

  currentInput = result.toString();
  operator = "";
  previousInput = "";
}

function resetCalculator() {
  currentInput = "0";
  previousInput = "";
  operator = "";
}

function backspace() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
}
