$(document).ready(function(){
	$("#team-slider").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
	});

	$('.counter').counterUp({
    delay: 10,
    time: 1000
	});
});