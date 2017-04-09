// initialize isotope~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.button-group > button').on('click', function() {
  $('.button-group > button').removeClass('active');
  $(this).addClass('active');
});

// initialize parallax~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('.no-parallax').addClass('parallax-window')
$('.parallax-window').parallax({imageSrc: 'img/gradient.png'});

//add image masonry
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);

}

$('#photos').append(allImages);

// smoothscrolling~~~~~~~~~~~~~
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
