
function main() {

(function () {
   'use strict';
   

	$('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
  });

	// affix the navbar after scroll below header
  $('#nav').affix({
    offset: {
      top: $('#header').height()
    }
  });

  // Collapse the navbar after click
  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });

  // Instagram + Owl Carousel
  $(document).ready(function () {
    var galleryFeed = new Instafeed({
      get: "user",
      userId: 7245013473,
      accessToken: "7245013473.1677ed0.0c7721a8fff64b908e46fe95a6177085",
      resolution: "standard_resolution",
      useHttp: "true",
      limit: 10,
      template: 
        '<a href="{{link}}" target="_blank">'+
          '<div class="img-featured-container">'+
            '<div class="img-backdrop"></div>'+
            '<div class="description-container">'+
              '<p class="caption">{{caption}}</p>'+
              '<span class="likes"><i class="fas fa-heart"></i> {{likes}}</span>'+
              '<span class="comments"><i class="fas fa-comments"></i> {{comments}}</span>'+
            '</div>'+
            '<img src="{{image}}" class="img-responsive">'+
          '</div>'+
        '</a>'
      ,
      target: "instafeed-gallery-feed",
      after: function() {
        // disable button if no more results to load
        if (!this.hasNext()) {
          btnInstafeedLoad.setAttribute('disabled', 'disabled');
        }
        
        var owl = $(".owl-carousel"),
            owlSlideSpeed = 300;

        // init owl    
        $(document).ready(function(){
          owl.owlCarousel({
            dotsContainer: '.owl-dots-custom',
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            margin:10,
            loop:true,
            nav:true,
            responsive:{
              0:{
                items:1
              },
              200:{
                items:2
              },
              400:{
                items:3
              },
              768:{
                items:5
              }
            }
          });
        });

        // keyboard controls
        $(document.documentElement).keydown(function(event) {
          if (event.keyCode == 37) {
            owl.trigger('prev.owl.carousel', [owlSlideSpeed]);
          }
          else if (event.keyCode == 39) {
            owl.trigger('next.owl.carousel', [owlSlideSpeed]);
          }
        });
      // end after in instafeed
      }
    // end new instafeed
    });

    galleryFeed.run();
    console.log(galleryFeed);
  });

}());

}
main();