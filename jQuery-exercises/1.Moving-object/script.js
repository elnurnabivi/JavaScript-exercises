// Create a rectangle and make it move to all edges of the page after a button has been clicked
$(document).ready(() => {
  $("#btn").click(() => {
    $(".rectangle").animate({ left: "93%" });
    $(".rectangle").animate({ top: "90%" });
    $(".rectangle").animate({ left: "0%" });
    $(".rectangle").animate({ top: "0%" });
  });
});
