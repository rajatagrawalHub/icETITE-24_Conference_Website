$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


  //------- mailchimp --------//  
	


  $('.img-gal').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
  });



  if ($('.blogCarousel').length) {
    $('.blogCarousel').owlCarousel({
        loop: false,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        navText : ["<div class='left-arrow'><i class='ti-angle-left'></i></div>","<div class='right-arrow'><i class='ti-angle-right'></i></div>"],
        responsive:{
          0:{
              items:1
          },
          1000:{
              items:2
          }
      }
    })
  }
  
  
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


