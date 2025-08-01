let startY = 0;
let endY = 0;

const fullscreenGallery = document.querySelector('.fullscreen-gallery');
const swiperContainer = document.querySelector('.fullscreen-swiper');

swiperContainer.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

swiperContainer.addEventListener('touchmove', (e) => {
  endY = e.touches[0].clientY;
});

swiperContainer.addEventListener('touchend', () => {
  if (startY && endY && endY - startY > 80) {
    closeGallery(); // swipe down
  }
});

function closeGallery() {
  fullscreenGallery.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

