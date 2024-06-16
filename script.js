$(document).ready(() => {
  const button = $("#button");
  const switch_ = $("#switch");

  $(switch_).click(() => {
    if (button.css("margin-left") == "0px") button.animate({ marginLeft: "30px" }, 250);
    else button.animate({ marginLeft: "0px" }, 250);
    button.toggleClass("green");
    switch_.toggleClass("blue");
    $("main").toggleClass("show");
  });
});
