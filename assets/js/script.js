$(document).ready(function() {
 
	var offset = 500;
	var duration = 300;

	// // lazy loading
 //    $(".lazy").Lazy({
 //    	scrollDirection: "vertical",
 //    	effect: "fadeIn",
 //    	visibleOnly: true
 //    });
 //    // lazy loading

 	// $(function() {
  //       $('.lazy').Lazy({
  //       	scrollDirection: "vertical",
  //   		effect: "fadeIn",
  //   		visibleOnly: true
  //       });
  //   });
  	
 
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$(".back-to-top").fadeIn(duration);
		} else {
			$(".back-to-top").fadeOut(duration);
		}
	});
	 
	$(".back-to-top").click(function(event) {
		event.preventDefault();
		$("html, body").animate({scrollTop: 0}, duration);  
	return false;
	});

	$(".picture").click(function() {
			$("#overlay").show();
			$(this).addClass("pic-click");
			document.body.style.overflow="hidden";
			$(".back-to-top").hide();
		});
		
		$("#overlay").click(function() {
			$(this).hide();
			$(".picture").removeClass("pic-click");
			document.body.style.overflow="visible";
			$(".back-to-top").show();
		});

	$(".item").click(function() {
		if ($(this).hasClass("clicked")) {
		} else {
			$(".item").removeClass("clicked");
			$(this).addClass("clicked");
		}
		// console.log($(this).children("span").attr("id") == "places-btn");
		// divSwitch();
		var isPeople = $(this).children("span").attr("id") == "people-btn"
		var isPlaces = $(this).children("span").attr("id") == "places-btn"
		var isFood =$(this).children("span").attr("id") == "food-btn"


	if (isPeople) {
				$('.thumbnail-wrapper').css("display", "none");
				$('#people-content').css("display", "block");
		} else if (isPlaces) {
				$('.thumbnail-wrapper').css("display", "none");
				$('#places-content').css("display", "block");
		} else {
				$('.thumbnail-wrapper').css("display", "none");
				$('#food-content').css("display", "block");
		}
	});
});

function cycleImages() {
	$("#cycler").each(function() {
		var $active = $(this).find(".active");
		var $next = ($(this).find(".active").next().length > 0) ? $(this).find(".active").next() : $(this).find("img:first");
		$next.css("z-index",2);//move the next image up the pile
		$active.fadeOut(1500,function() {//fade out the top image
			$active.css("z-index",1).show().removeClass("active");//reset the z-index and unhide the image
			$next.css("z-index",3).addClass("active");//make the next image the top one
		});
	});
}


//run every 5 seconds
setInterval("cycleImages()", 5000);

 



// $(document).ready(function() {

//   //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
	


//   // $("#logo").hover(function(){
//   //   $("#bone").addClass("boneani");
//   //   $("#logo").addClass("pawani");
//   //   $("#logo").off("mouseenter mouseleave");
//   // });


//   $("#logo").on("mouseenter", function() {
//         $("#bone").show();
//         $("#bone").addClass("boneani");
//         // $("#paw").addClass("pawani");
//     }).on("mouseleave", function() {
//         $("#bone").hide();
//         $("#bone").removeClass("boneani");
//         // $("#paw").removeClass("pawani");
//     });
	

//   $("#sidebar-button").click(function() {
//     if ($(".sidebar-container").hasClass("sidebar-active")) {
//       $("body").removeClass("no-scroll");
//       $("#sidebar-button").removeClass("button-active");
//       $(".sidebar-container").removeClass("sidebar-active");
//       $(".page-wrapper").removeClass("wrapper-active");
//       $(".nav-bar").removeClass("nav-active");
//       // $("#logo").removeClass("logo-active");
//   } else {
//       $("#sidebar-button").addClass("button-active");
//       $(".sidebar-container").addClass("sidebar-active");
//       $(".page-wrapper").addClass("wrapper-active"); 
//       $(".nav-bar").addClass("nav-active");
//       // $("#logo").addClass("logo-active");
//       setTimeout(function() {
//         $('body').addClass('no-scroll');
//         }, 300);
//   }
//   });

//   $("#logo").click(function(){
//     $("html, body").animate({
//       scrollTop: 0
//     }, 1000);
//   });


//   //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
//   $(".page-wrapper").click(function() {
//       $("body").removeClass("no-scroll");
//       $("#sidebar-button").removeClass("button-active");
//       $(".sidebar-container").removeClass("sidebar-active");
//       $(".page-wrapper").removeClass("wrapper-active");
//       $(".nav-bar").removeClass("nav-active");
//       $("#logo").removeClass("logo-active");
//   });

//   //Implement the "slide to left" when the user clicks on #carousel-next here
//   $("#carousel-next").click(function() {
//     var currMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
//     if (currMargin == -2880 || currMargin == -3840) {
//       $("#carousel-next").css("background-color", "grey");
//       $("#carousel-next").css("opacity", "0.4");
//     }
//     if (currMargin == -3840) {
//       return false;
//     } else {
//         var newMargin = currMargin - 960;
//         $("#carousel").css("margin-left", newMargin);
//         $("#carousel-prev").css("background-color", "transparent");
//         $("#carousel-prev").css("opacity", "1");
//     }
//   });
//   //Implement the "slide to right" when the user clicks on #carousel-prev here
//   $("#carousel-prev").click(function() {
//     var currMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
//     if (currMargin == -960 || currMargin == 0) {
//       $("#carousel-prev").css("background-color", "grey");
//       $("#carousel-prev").css("opacity", "0.4");
//     }
//     if (currMargin == 0) {
//       return false;
//     } else {
//         var newMargin = currMargin + 960;
//         $("#carousel").css("margin-left", newMargin);
//         $("#carousel-next").css("background-color", "transparent");
//         $("#carousel-next").css("opacity", "1");
//     }
//   });

//   $("#modal-container").hide();

//   $("#login").click(function() {
//     $("#modal-container").show();
//     setTimeout(function() {
//         $('body').addClass('no-scroll');
//         }, 300);
//   });
//   // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
//   $("#submit").click(function() {
//     $("#modal-container").hide();
//     $("body").removeClass("no-scroll");
//   });
//   // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
//   $("#cancel").click(function() {
//     $("#modal-container").hide();
//     $("body").removeClass("no-scroll");
//   });
	
//   // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
//   $("#modal-overlay").click(function() {
//     $("#modal-container").hide();
//     $("body").removeClass("no-scroll");
//   });


//   $("#modal-container").hide();
// });