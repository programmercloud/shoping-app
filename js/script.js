$(".change-mode").click(function () {
  $("body").toggleClass("dark");
});

$(".category").click(function () {
  $(".category").removeClass("active");
  $(this).addClass("active");
});

$(".category").click(function () {
  $(".products").css("display", "none");
  var catergoryIndex = $(".category").index(this);
  $(".shop .products").eq(catergoryIndex).css("display", "block");
});
