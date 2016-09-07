$( document ).ready(function() {
	$('.our-works__img-holder').height($('.our-works__elem').height() + 1);
	$('.our-works__img-inner').height($('.our-works__elem').height() + 1);
	$('.our-works__hover').height($('.our-works__elem').height() + 1);
	$('.our-works__hover-inner').height($('.our-works__elem').height() + 1);



	var primary_Swiper = new Swiper('.primary-swiper-container', {
	    speed: 400,
	    spaceBetween: 450,
	    // autoplay: 3500,

	    pagination: '.primary-swiper-pagination',
	    paginationClickable: true
	});

	var primary_Swiper = new Swiper('.people-say-swiper-container', {
	    speed: 400,
	    spaceBetween: 450,
	    // autoplay: 3500,

	    nextButton: '.people-say-swiper-button-next',
	    prevButton: '.people-say-swiper-button-prev',

	    pagination: '.people-say-swiper-pagination',
	    paginationClickable: true,
	    paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + '<img src="images/content/slider_pagination/slider_pagination-' + (index + 1) + '.png">' + '</span>';
        }
	});
});