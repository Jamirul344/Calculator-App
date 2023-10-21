// display value
function displayValue(val) {
  document.getElementById("result").value += val;
}

// evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

// clear the result
function clearResult() {
  document.getElementById("result").value = "";
}
//backspace
function backspace() {
  document.getElementById("result").value = document
    .getElementById("result")
    .value.slice(0, -1);
}
//keypress event
document.addEventListener("keypress", function (event) {
  const key = event.key;
  if (/[0-9+\-*/.=]|Enter/.test(key)) {
    if (key === "Enter") {
      solve();
    } else if (key === "=") {
      solve();
    } else {
      displayValue(key);
    }
  }
});
