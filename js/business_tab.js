$(document).ready(function() {
    $(".tab_title li").click(function() {
      var idx = $(this).index();
      $(".tab_title li").removeClass("on");
      $(".tab_title li").eq(idx).addClass("on");
      $(".tab_contents > div").hide();
      $(".tab_contents > div").eq(idx).show();
    })
  });