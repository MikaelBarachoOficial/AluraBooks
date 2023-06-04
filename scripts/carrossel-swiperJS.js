if (window.innerWidth >= 750) {

  const swiper = new Swiper('.swiper', {

      speed: 400,
      spaceBetween: 80,
      slidesPerView: 3,
    
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      // Optional parameters
      direction: 'horizontal',
      loop: true,

    });

} else {

  const swiper = new Swiper('.swiper', {
    
    spaceBetween: 5,
    slidesPerView: 2.4,
  
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

    // Optional parameters
    direction: 'horizontal',
    loop: true,

  });

}
