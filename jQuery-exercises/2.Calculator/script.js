// ● Create a functioning calculator using jQuery
$(document).ready(() => {
  let result;
  let screen = $(".screen");
  screen.val("0");

  $(".btn").click((e) => {
    if (screen.val() === "0") {
      screen.val("");
    }
    result = e.target.dataset.num;
    const displayResult = screen.val() + result;
    screen.val(displayResult);
  });

  $(".btn-equal").click(() => {
    result = eval(screen.val());
    screen.val(result);
  });

  $(".btn-clear").click(() => {
    screen.val("0");
  });
});
