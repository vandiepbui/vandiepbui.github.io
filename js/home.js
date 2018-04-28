$(function(){
	var docao = $(window).height();
	$('.img-carousel').css({'height':docao});
	$(window).resize(function(){
		var docao = $(window).height();
		$('.img-carousel').css({'height':docao});
	});

	//ham click
	$(".logo").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#myCarousel").offset().top - 100
	    }, 1500);
	    return false;
	});

	$(".n1").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#about").offset().top - 55
	    }, 1500);
	    return false;
	});

	$(".n2").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#portfolio").offset().top - 55
	    }, 1500);
	    return false;
	});

	$(".n3").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top - 55
	    }, 1500);
	    return false;
	});
});
