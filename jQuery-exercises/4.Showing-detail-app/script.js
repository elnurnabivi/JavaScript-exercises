// ● Create a list of items(any topic) and on hover show details on each row
$(document).ready(() => {
  $("li").hover(
    (e) => {
      const liElement = e.currentTarget;
      $(liElement).find(".extension").css("display", "inline-block");
    },
    (e) => {
      const liElement = e.currentTarget;
      $(liElement).find(".extension").css("display", "none");
    }
  );
});
