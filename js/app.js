window.addEventListener('load', () => {
  //glider.js
    const carousel = document.querySelector('.carousel__galeria');
    new Glider (carousel, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
    });
  // parallax scrolling
  const titulo = document.getElementsByClassName('textos');
  const logo = document.getElementsByClassName('foto');
  const informacion = document.getElementsByClassName('informacion');
    new simpleParallax(titulo, {
      orientation: 'down',
      overflow: true,
      scale: 1.5,

    });
    new simpleParallax(logo, {
      orientation: 'down',
      overflow: true,
      scale: 1.5,
    });
    new simpleParallax(informacion, {
      orientation: 'down',
      overflow: true,
      scale: 0,


    });
});