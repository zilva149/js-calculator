import { Calculator } from "./Calculator.js";

const previousValueText = document.querySelector(".previous-value-text");
const currentValueText = document.querySelector(".current-value-text");

const btnClear = document.querySelector("button[data-clear]");
const btnDelete = document.querySelector("button[data-delete]");
const btnEquals = document.querySelector("button[data-equals]");
const btnsNumber = document.querySelectorAll("button[data-number]");
const btnsOperation = document.querySelectorAll("button[data-operation]");

const calculator = new Calculator(previousValueText, currentValueText);

btnClear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

btnDelete.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

btnEquals.addEventListener("click", (e) => {
  calculator.compute();
  calculator.updateDisplay();
});

btnsNumber.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculator.appendNumber(e.currentTarget.innerHTML);
    calculator.updateDisplay();
  });
});

btnsOperation.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculator.chooseOperation(e.currentTarget.innerHTML);
    calculator.updateDisplay();
  });
});
