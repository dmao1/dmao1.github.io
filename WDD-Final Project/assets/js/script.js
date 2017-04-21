$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $(".nav-bar").removeClass("nav-active");
      $("#logo").removeClass("logo-active");
  } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active"); 
      $(".nav-bar").addClass("nav-active");
      $("#logo").addClass("logo-active");
      setTimeout(function() {
        $('body').addClass('no-scroll');
        }, 300);
  }
  });

  $("#logo").click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    console.log("hello");

  });

  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  $(".page-wrapper").click(function() {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $(".nav-bar").removeClass("nav-active");
      $("#logo").removeClass("logo-active");
  });
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click(function() {
    var currMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (currMargin == -2880 || currMargin == -3840) {
      $("#carousel-next").css("background-color", "grey");
      $("#carousel-next").css("opacity", "0.4");
    }
    if (currMargin == -3840) {
      return false;
    } else {
        var newMargin = currMargin - 960;
        $("#carousel").css("margin-left", newMargin);
        $("#carousel-prev").css("background-color", "transparent");
        $("#carousel-prev").css("opacity", "1");
    }
  });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function() {
    var currMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (currMargin == -960 || currMargin == 0) {
      $("#carousel-prev").css("background-color", "grey");
      $("#carousel-prev").css("opacity", "0.4");
    }
    if (currMargin == 0) {
      return false;
    } else {
        var newMargin = currMargin + 960;
        $("#carousel").css("margin-left", newMargin);
        $("#carousel-next").css("background-color", "transparent");
        $("#carousel-next").css("opacity", "1");
    }
  });


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here





  $("#modal-container").hide();




  $("#link").click(function() {
    $("#modal-container").show();
    setTimeout(function() {
        $('body').addClass('no-scroll');
        }, 300);
  });
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
  $("#submit").click(function() {
    $("#modal-container").hide();
    $("body").removeClass("no-scroll");
  });
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
  $("#cancel").click(function() {
    $("#modal-container").hide();
    $("body").removeClass("no-scroll");
  });
  
  // Question 5
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
  $("#modal-overlay").click(function() {
    $("#modal-container").hide();
    $("body").removeClass("no-scroll");
  });
});