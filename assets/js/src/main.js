var lipafc = {};

$(function () {
  lipafc.yearSelector();
  lipafc.events();
  lipafc.carousel();
});


lipafc.yearSelector = function(){
  console.log("trigger");
  /**
   * yearSelector
   * Toggles to only show the current year
   */
  var currYear = $("#year-select").val();
  $("tbody tr").not("[data-year='"+currYear+"']").hide();
  $("tbody tr[data-year='"+currYear+"']").show();
  return;
};

lipafc.events = function(){
  // var yearSelect = document.getElementById("year-select");
  // yearSelect.addEventListener("onchange", init.yearSelector());
  $("#year-select").on("change",function(){
    lipafc.yearSelector();
  });

  $(".main-nav a").on("click",function(e){
    if( window.innerWidth > 768 ){
    } else {
      $('.menu-toggle').click();
    }

    var scrollTo = $(this).attr('href');
    if ( $(scrollTo).length && scrollTo != null && scrollTo != '') {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(scrollTo).offset().top
      }, 500);
    }
  });

  $('.menu-toggle').on('click', function() {
    $('.menu-toggle').toggleClass('animate');
    $('.main-nav ul').toggleClass('active-nav');
    if( window.innerWidth <=768 ){
      $('body').toggleClass('active-mobile-nav');
    }
	});

  return;
};

lipafc.carousel = function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    parallax: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

