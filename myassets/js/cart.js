$(document).ready(function () {
  $("#shopbag").on("click", function (e) {
    e.preventDefault();

    $("#cartarea").toggleClass("activearea");
  });
});
