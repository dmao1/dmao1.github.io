$(document).ready(function() {
 
	var offset = 500;
	var duration = 300;
  	
 	// Back to top scroll feature //
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

	// Gallery view feature //

	$(".picture").click(function() {
		var clicked = $(this);
		$("#overlay").show();
		
		$("#arrow-container").show();
		
		clicked.addClass("pic-click");
		document.body.style.overflow="hidden";
		$(".back-to-top").hide();

		$(".left-arr").click(function() {
			if (clicked.prev()) 
			{
				clicked.removeClass("pic-click");

				var contentTypeId = clicked.parent().parent().parent().attr("id");

				console.log(contentType == "people-content");

				// clicked.next(".picture").addClass("pic-click");
			} 
			else 
			{
				
			}
		});
	});
		
	$("#overlay").click(function() {
		$(this).hide(); //hide overlay
		$(".picture").removeClass("pic-click"); //remove pic-click class
		document.body.style.overflow="visible"; //make body visible
		$(".back-to-top").show(); // back to top button again
		$("#arrow-container").hide(); //hide arrows again
	});



	// keep active category tab hilighted //

	$(".item").click(function() {
		if ($(this).hasClass("clicked")) {
		} else {
			$(".item").removeClass("clicked");
			$(this).addClass("clicked");
		}

	// show categories of photos (People, Places, Food) //	

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

// cycle through images on home page //

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

 

