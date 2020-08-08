$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		centerMode: true,
		centerPadding: '0px',
		responsive:[
			{
				breakpoint: 2500,
				settings: {
					slidesToShow:3,
					arrows: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 1353,
				settings: {
					slidesToShow:2,
					arrows: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 875,
				settings: {
					slidesToShow:1,
					arrows: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 611,
				settings: {
					slidesToShow:1,
					arrows: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:2,
					arrows: true,
					centerMode: true,
				}
			},
		]
	});
});

