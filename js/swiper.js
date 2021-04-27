new Swiper('.about-slider', {
   autoplay: {
      //пауза между прокруткой
      delay: 1000,
      //закончить на последнем слайде
      stopLastSlide: true,
      //отключить после ручного переключения
      disableOnInteraction: false
   },
   //скорость
   speed: 1500,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   spaceBetween: 30,
   grabCursor: true,
   slidesPerView: 4,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      550: {
         slidesPerView: 2,
      },
      830: {
         slidesPerView: 3,
      },
      1100: {
         slidesPerView: 4,
      }
   },
});
new Swiper('.company-slider', {
   autoplay: {
      //пауза между прокруткой
      delay: 1000,
      //закончить на последнем слайде
      stopLastSlide: false,
      //отключить после ручного переключения
      disableOnInteraction: false
   },
   //скорость
   speed: 2000,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   grabCursor: true,
   slidesPerView: 1,
});