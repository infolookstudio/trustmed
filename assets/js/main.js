(function ($) {
    'use strict';

    $(window).on("load", function() {
		background();
	    //preloader
		$("#preloader").delay(300).animate({
	    	"opacity" : "0"
	    	}, 500, function() {
	    	$("#preloader").css("display","none");
	    });
	});

    // background image js
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// Activate scroll to top
	$("#scroll-top").on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	// active mobile-menu
	jQuery('#mobile-menu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu'
	});

	// service-carousel-3 active
	$('.offer-wrap').owlCarousel({
		items:4,
		loop: true,
		smartSpeed: 800,
		nav: false,
		dots: true,
		margin: 15,
		navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			767: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	// Activate scroll to top
	$("#scroll-top").on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 1000);
	});

	// Nice select
	$('select').niceSelect();

	$(".nav-cat-btn").on("click", function () {
		$(".nav-cat-menu").addClass("active");
	});

	// offcanvas menu
	$(".nav-cat-btn").on("click", function () {
		$(".nav-cat-menu").removeClass("active");
	});


	// Activate lightcase
	$('a[data-rel^=lightcase]').lightcase();
	
	$(document).on('click', '.qty-plus', function () {
		var input = $(this).prev('input');
		var step = typeof input.attr('step') == 'undefined' ? 1 : parseInt(input.attr('step'));
		var max = typeof input.attr('max') == 'undefined' ? false : parseInt(input.attr('max'));
		var value = parseInt(input.val());
		if (isNaN(max)) {
			max = false;
		}
		value += step;
		if (max && (value > max)) {
			value = max;
		}
		input.val(value);
		input.trigger('change');
	});

	$(document).on('click', '.qty-minus', function () {
		var input = $(this).next('input');
		var step = typeof input.attr('step') == 'undefined' ? 1 : parseInt(input.attr('step'));
		var min = typeof input.attr('min') == 'undefined' ? 1 : parseInt(input.attr('min'));
		if (isNaN(min)) {
			min = 1;
		}
		var value = parseInt(input.val());
		value -= step;
		if (value < min) {
			value = min;
		}
		input.val(value);
		input.trigger('change');
	});

	$(".sideicon").on("click", function () {
		$(".overlay, .sidebarlists").addClass("active");
	});

	$(".overlay, .crossbars").on("click", function () {
		$(".sidebarlists, .overlay").removeClass("active");
	});

	// menu options custom affix
	var fixed_top = $(".site-header");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 70) {
			fixed_top.addClass("animated fadeInDown sticky");
		} else {
			fixed_top.removeClass("animated fadeInDown sticky");
		}
	});

	var cat_menu = $('.home .nav-cat-menu');
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 70) {
			cat_menu.removeClass("show");
		} else {
			cat_menu.addClass("show");
		}
	});

	var sidebar = $(".woo-sidebar");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 220) {
			sidebar.addClass("sticky");
		} else {
			sidebar.removeClass("sticky");
		}
	});

	// WOW Js Active
	new WOW().init();


})(jQuery);