$(document).ready(function() {

    $("a.header_link").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });

 });