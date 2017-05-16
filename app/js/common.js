// SLIDER ==================================================================================
// var hwSlideSpeed = 700;
// var hwTimeOut = 3000;
// var hwNeedLinks = true;
 
// $(document).ready(function(e) {
//     $('.posttext').css(
//         {"position" : "absolute",
//          "top":'0', "left": '0'}).hide().eq(0).show();
//     var slideNum = 0;
//     var slideTime;
//     slideCount = $("#slider .slide").size();
//     var animSlide = function(arrow){
//         clearTimeout(slideTime);
//         $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
//         if(arrow == "next"){
//             if(slideNum == (slideCount-1)){slideNum=0;}
//             else{slideNum++}
//             }
//         else if(arrow == "prew")
//         {
//             if(slideNum == 0){slideNum=slideCount-1;}
//             else{slideNum-=1}
//         }
//         else{
//             slideNum = arrow;
//             }
//         $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
//         $(".control-slide.active").removeClass("active");
//         $('.control-slide').eq(slideNum).addClass('active');
//         }
// if(hwNeedLinks){
// var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
//     .prependTo('#slider');      
//     $('#nextbutton').click(function(){
//         animSlide("next");
 
//         })
//     $('#prewbutton').click(function(){
//         animSlide("prew");
//         })
// }
//     var $adderSpan = '';
//     $('.slide').each(function(index) {
//             $adderSpan += '<span class = "control-slide">' + index + '</span>';
//         });
//     $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
//     $(".control-slide:first").addClass("active");
     
//     $('.control-slide').click(function(){
//     var goToNum = parseFloat($(this).text());
//     animSlide(goToNum);
//     });
//     var pause = false;
//     var rotator = function(){
//     if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
//             }
//     $('#slider-wrap').hover(    
//         function(){clearTimeout(slideTime); pause = true;},
//         function(){pause = false; rotator();
//         });
//     rotator();
// });
// ================================================================================== EoF SLIDER 

$(function() {

$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
});

//MINE SLIDER ====================================================================

	$(".posttext").hide().eq(0).show();
	$(".postheader span").hide().eq(0).show();
	var slNum = 0;
	var totalSl = 2; //Sliders - 1
	function slideItems(z){
		if(slNum<0){
			slNum=totalSl;
		}
		if(slNum>totalSl){
			slNum = 0;
		}
		if(z=="+"){
			prevNum = slNum + 1;
			if(prevNum>totalSl){
				prevNum=0;
			}
		}
		else {
			prevNum = slNum - 1;	
		}
		$(".posttext").hide().eq(slNum).fadeIn(700);
		$(".postheader span").hide().eq(slNum).fadeIn(700);
		$(".dots i").eq(prevNum).removeClass("active");
		$(".dots i").eq(slNum).addClass("active");
		// console.log(slNum + z + 1);
	}
	$(".larr i").click(function(){
		slNum -= 1;
		slideItems("+");
	});
	$(".rarr i").click(function(){
		slNum += 1;
		slideItems("-");
	});

// ================================================================================== EoF

//ANIMATE NUMBERS IN SECTION ====================================================================
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
// ================================================================================== EoF


//PARALLAX EFFECT IN SECTION ==================================================================
$(".advantages").stellar();
$(".news").stellar();

//BUILD OBJECTS ITEM HOVER EFFECT
$("div.item-obj").hover(function() {
	var addp = $(this).find(".descr-obj-wrapper");
	var objd = $(this).find(".ico-obj-descr");
	objd.animate({width: 'toggle'});
	addp.slideToggle(400);
	
	return false;
});

// !!!!!!!!!!!!!!!!FOR TESTS!!!!!!!!!!!!!!!!
// $(".logo").click(function(){
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
