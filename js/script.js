$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		centerMode: true,
		centerPadding: '0px',
		waitForAnimate: false,
		responsive:[
			{
				breakpoint: 2500,
				settings: {
					slidesToShow:3,
					arrows: true,
				}
			},
			{
				breakpoint: 1353,
				settings: {
					slidesToShow:2,
					arrows: true,
				}
			},
			{
				breakpoint: 875,
				settings: {
					slidesToShow:1,
					arrows: true,
				}
			},
			{
				breakpoint: 611,
				settings: {
					slidesToShow:1,
					arrows: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:2,
					arrows: true,
				}
			},
		]
	});
});

