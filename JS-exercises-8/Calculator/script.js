let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

let result;
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    result = event.target.dataset.num;
    screen.value += result;
  });
});

equal.addEventListener("click", function (event) {
  result = eval(screen.value);
  screen.value = result;
});

clear.addEventListener("click", function (event) {
  screen.value = "";
});
