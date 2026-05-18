document.querySelectorAll('.swiper-card__gallery').forEach(slider => {

   const colors = slider.dataset.colors.split(',');

   new Swiper(slider, {

      initialSlide: 4,
      speed: 700,
      effect: 'creative',

      creativeEffect: {
         prev: {
            translate: ['-15%', 0, -1],
            opacity: 0,
         },

         next: {
            translate: ['15%', 0, -1],
            opacity: 0,
         },
      },

      pagination: {
         el: slider
            .closest('.swiper-card')
            .querySelector('.swiper-card__pagination'),

         clickable: true,

         renderBullet(index, className) {

            return `
            <span
               class="${className}"
               style="background-color:${colors[index]}"
            ></span>
            `;
         }
      },

   });

});

// ----------- бургер -----------

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   nav.classList.toggle('active');

   document.body.classList.toggle('lock');
});