class Calculator {
  constructor() {
    this.operation = "";
    this.cache = 0;
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  fetch(a, b, operation) {
    this.cache = operation(a, b);
  }
  give() {
    return this.cache;
  }
}

const calc = new Calculator();
let displ = document.querySelector("#display");
let equals = document.querySelector("#equals");
let operators = document.querySelectorAll(".key.operator");
let ac = document.querySelector(".key.AC");

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  if (key.classList.value === "key" || key.classList.value === "key zero") {
    key.onclick = () => displ.value += key.innerHTML;
  }
});

let cache = 0;
operators.forEach((operator) => {
  switch (operator.innerHTML) {
    case "/":
      operator.onclick = () => {
        cache = displ.value;
        displ.value = "";
        calc.operation = calc.divide;
      }
      break;
    case "*":
      operator.onclick = () => {
        cache = displ.value;
        displ.value = "";
        calc.operation = calc.multiply;
      }
      break;
    case "-":
      operator.onclick = () => {
        cache = displ.value;
        displ.value = "";
        calc.operation = calc.subtract;
      }
      break;
    case "+":
      operator.onclick = () => {
        cache = displ.value;
        displ.value = "";
        calc.operation = calc.add;
      }
      break;
    default:
      break;
  }
});

equals.onclick = () => {
  calc.fetch(cache, displ.value, calc.operation);
  displ.value = calc.give();
}

ac.onclick = () => {
  calc.cache = 0;
  displ.value = "";
}