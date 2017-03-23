$(function() {

$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
});

//ANIMATE NUMBERS IN SECTION
$(".advantages").waypoint(function(){
	// $( ".item-adv b" ).each(function() {
	// 	$(this).animate({opacity: .5}, 500 );
	// });
	$("div.item-adv b").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad'},
		1500);
	});
	}, {
	offset: '70%'	
});

//PARALLAX EFFECT IN SECTION
$(".advantages").stellar();

//BUILD OBJECTS ITEM HOVER EFFECT
$("div.item-obj").hover(function() {
	var addp = $(this).find(".descr-obj-wrapper");
	var objd = $(this).find(".ico-obj-descr");
	objd.animate({width: 'toggle'});
	addp.slideToggle(400);
	
	return false;
});

// !!!!!!!!!!!!!!!!FOR TESTS!!!!!!!!!!!!!!!!
// $(".item-adv span").click(function(){
// 	alert("dfnhjsgf");
// });


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
