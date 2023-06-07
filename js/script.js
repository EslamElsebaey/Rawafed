

$(window).on("load", function () {
  $(".preloader").fadeOut();
})



$(document).ready(function(){
    





/************************************************************************************************** */


// main swiper


const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});








// open and close sideBar


$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})






/************************************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/************************************************************************************************** */



// footer nested menu


if($(window).width() <= 768) {
  $(".footer-title").click(function(){
    $(this).next().slideToggle(350);
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
}






/************************************************************************************************** */



// nav nested menu

if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }


/************************************************************************************************** */


//fixed nav

   
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 20){
    if($(window).width() < 992){
      $("nav").addClass("padding-top")
    }
  }else{
    if($(window).width() < 992){
      $("nav").removeClass("padding-top")
    }
  }
  if ($(window).scrollTop() > 150) {
    $("header").addClass("fixed");
    if($(window).width() > 992){
      $(".logo img").addClass("logo-width");
    }
  } else {
    $("header").removeClass("fixed");
    if($(window).width() > 992){
      $(".logo img").removeClass("logo-width");
    }
  }
});
var fixedBar = document.querySelector("header"),
  prevScrollposition = $(window).scrollTop();

(window.onscroll = function () {
  var o = $(window).scrollTop();
  prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
})   





})  // end of document ready









