$('.carousel-recs').slick({
  arrows: false,
  centerMode: true,
  centerPadding: "18.75%",
  dots: true,
  mobileFirst: true,
  responsive: [{
      breakpoint: 499,
      settings: {
        centerPadding: "16.6666665%",
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 999,
      settings: {
        centerPadding: "12.5%",
        nextArrow: '<button type="button" class="carousel-next"><span class="sr-only">Next</span><svg xmlns="http://www.w3.org/2000/svg" width=".625em" height="1em" viewBox="0 0 10 16" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-rule="evenodd" points="2 0 0 2 6 8 0 14 2 16 10 8"/></svg></button>',
        prevArrow: '<button type="button" class="carousel-prev"><span class="sr-only">Previous</span><svg xmlns="http://www.w3.org/2000/svg" width=".625em" height="1em" viewBox="0 0 10 16" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-rule="evenodd" points="8 0 10 2 4 8 10 14 8 16 0 8"/></svg></button>',
        slidesToScroll: 3,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1249,
      settings: {
        arrows: true,
        centerMode: false,
        infinite: false,
        nextArrow: '<button type="button" class="carousel-next"><span class="sr-only">Next</span><svg xmlns="http://www.w3.org/2000/svg" width=".625em" height="1em" viewBox="0 0 10 16" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-rule="evenodd" points="2 0 0 2 6 8 0 14 2 16 10 8"/></svg></button>',
        prevArrow: '<button type="button" class="carousel-prev"><span class="sr-only">Previous</span><svg xmlns="http://www.w3.org/2000/svg" width=".625em" height="1em" viewBox="0 0 10 16" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-rule="evenodd" points="8 0 10 2 4 8 10 14 8 16 0 8"/></svg></button>',
        slidesToShow: 6,
        slidesToScroll: 6
      }
    }
  ]
});

// Price
$.fn.pricey = function() {
  return this.each(function() {
    var str = $(this).text().replace('$', ''),
      dec = str.split('.');
    $(this).html('<div class="best">' +
      '<sup>$</sup>' +
      '<span>' + dec[0] + '</span>' +
      '<span class="sr-only">.</span>' +
      '<sup>' + dec[1] + '</sup>' +
      '</div>');
  });
}

$('.price').pricey();
