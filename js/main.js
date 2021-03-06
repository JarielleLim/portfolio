// initialize isotope~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
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
