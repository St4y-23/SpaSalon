$(window).on('load', function () {

  var tl = gsap.timeline({ defaults: { duration: .6 } });
      tl.to(".preloader__bg", { delay: 1, width: '100%' })
        .to(".preloader__bg", { x: '100%'})
        .to("#preloader", { x: '100%'}, "-=.7")

  var tl1 = gsap.timeline({ defaults: { duration: .8 } });
      tl1.from(".header__logo", { delay: 1.7, x: '-20%', opacity: 0 })
         .from(".header__menu-link", { stagger: 0.1, x: '-20%', opacity: 0 }, "-=.7")
         .from(".header__call-header", { x: '-10%', opacity: 0 }, "-=.9")
         .from(".ham__box", { x: '-40%', opacity: 0 }, "-=.7")

         .from(".intro__title", { x: '-5%', opacity: 0 }, "-=.9")
         .from(".intro__text", { x: '-5%', opacity: 0 }, "-=.7")
         .from(".intro__btn-box", { x: '-5%', opacity: 0 }, "-=.7")
         .from(".intro__image-box", { duration: 1, opacity: 0 }, "-=.8")
         .from(".intro__icon-box", { duration: 1, opacity: 0 }, "-=.8")
         .from(".leaf_0", { x:'-5%', opacity: 0 }, "-=1")
         .from(".leaf_1", { x:'-5%', opacity: 0 }, "-=.9")
        
});


$(function () {

  // Slider
  var swiper = new Swiper(".license__slider", {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.license-btn-next',
      prevEl: '.license-btn-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "0": {
        centeredSlides: true,
        spaceBetween: 15,
      },
      "769": {
        centeredSlides: true,
        spaceBetween: 15,
      },
      "1025": {
        spaceBetween: 30,
      },
    }
  });

  var swiper2 = new Swiper(".testimonials__slider", {
    centeredSlides: true,
    loop: true,
    
    navigation: {
      nextEl: '.testimonials-btn-next',
      prevEl: '.testimonials-btn-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "0": {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      "769": {
        slidesPerView: 3,
        spaceBetween: 0
      },
      "1441": {
        slidesPerView: 3,
        spaceBetween: 0
      },
    }
  });

  
  // Accordion 
  $(".faq__accordion-tab").click(function () {
    $(".faq__accordion-tab").each(function () {
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
  });


  // var parallax = document.getElementById('parallax');
  // var parallaxInstance = new Parallax(parallax);



  // Burger menu
  $('.ham').on('click', function () {
    $('.header__menu').toggleClass('active')
    $('body').toggleClass('active')
  });


  // Fixed menu
  let header = $("#header");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, headerH);

  $(window).on("scroll resize", function () {
    headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, headerH);
  });

  function checkScroll(scrollPos, headerH) {
    if (scrollPos > headerH) {
      header.addClass("active");
    } else {
      header.removeClass("active");
    }
  };


  // Rellax
  
  if (window.matchMedia("(min-width: 1441px)").matches) {
    var rellax = new Rellax('.rellax', {});
  }else{
    
  }

  // Magnific Popup
  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
    fixedContentPos: false,
    closeOnContentClick: false,
		closeBtnInside: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

  // Lax.js



  // Scroll menu nav

  // $("[data-scroll]").on("click", function (event) {
  //   event.preventDefault();
  //   let elementID = $(this).data("scroll");
  //   let elementOffset = $(elementID).offset().top;

  //   if (window.matchMedia("(min-width: 1025px)").matches) {

  //     $('.ham').toggleClass('active')
  //     $('.header__menu').toggleClass('active')

  //   } else {

  //     $('.ham').toggleClass('active')
  //     $('.header__menu').toggleClass('active')
  //     $('body').toggleClass('active')

  //   }


  //   $("html, body").animate({
  //     scrollTop: elementOffset - 75
  //   }, 700);
  // });


  // ScrollReveal

  // var slideUp = {
  // 	delay: 100,
  // 	useDelay: 'once',
  // 	duration: 500,
  // 	reset: false,
  // 	interval: 100,
  // 	distance: '20px',
  // 	easing: 'cubic-bezier(.15,0,.32,1.01)',
  // 	viewOffset: {
  // 		bottom: 50
  // 	}
  // }


  // var scrollBox = [
  // 	document.querySelector('.about__image-box'),
  // ];


  // var shadow = document.querySelectorAll('.shadow');


  // var scrollAnim = document.querySelectorAll('.scrollAnim');


  // ScrollReveal().reveal(scrollBox, slideUp);

  // ScrollReveal().reveal(shadow, slideUp);

  // ScrollReveal().reveal(scrollAnim, slideUp);

  gsap.config({
		nullTargetWarn: false
	});

});