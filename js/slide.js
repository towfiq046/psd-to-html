$(document).ready(function() {
  // Case study
  $(".case-study-carousel").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow:
      '<i class="zmdi zmdi-chevron-left zmdi-hc-4x light  prev-arrow-btn "></i>',
    nextArrow:
      '<i class="zmdi zmdi-chevron-right zmdi-hc-4x light next-arrow-btn"></i>'
  });

  // Testimonial
  $(".testimonial-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      '<i class="zmdi zmdi-chevron-left zmdi-hc-3x light  prev-arrow-btn "></i>',
    nextArrow:
      '<i class="zmdi zmdi-chevron-right zmdi-hc-3x light next-arrow-btn"></i>'
  });

  // Brand logo
  $(".logo-carousel").slick({
    centerMode: true,
    infinite: true,

    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
