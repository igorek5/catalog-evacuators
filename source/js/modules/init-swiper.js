/* global Swiper */
/* Swiper 7.4.1 */

export const initSwiper = () => {
  return new Swiper('.swiper', {
    grabCursor: true,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
};
