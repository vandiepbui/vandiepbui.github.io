$(function(){
	var docao = $(window).height();
	$('.img-carousel').css({'height':docao});
	$(window).resize(function(){
		var docao = $(window).height();
		$('.img-carousel').css({'height':docao});
	});
});
