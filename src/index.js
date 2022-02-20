let titleEl = document.getElementById("title-el");
let displayEl = document.getElementById("display-window");
let textEl = document.getElementById("text-el");

let title = "Calculator App";
let result = "";
let text =
  "Hi there, Kartik here. I am learning JavaScript <br> and I have built this simple JS powered calculator!";

titleEl.textContent = title;
textEl.innerHTML = text;

let arr = [];

function buttonPressed(x) {
  if (x === "clear") {
    displayEl.textContent = "";
  } else if (Number.isInteger(x)) {
    displayEl.textContent += x;
  } else if (x === ".") {
    displayEl.textContent += x;
  } else if (x != "=") {
    displayEl.textContent += " " + x + " ";
  } else {
    result = eval(displayEl.textContent);
    displayEl.textContent += " = " + result;
  }
}
