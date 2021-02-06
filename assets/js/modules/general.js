export function preLoader() {
  $(window).on("load", function () {
    $(".cd-loader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
}

export function hamburger() {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $(".bk-primary-nav").toggleClass("loaded");
  });
}
