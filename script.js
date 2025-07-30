document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const fullscreenGallery = document.querySelector('.fullscreen-gallery');
  const closeBtn = document.querySelector('.close-gallery');
  let swiper;

  function initializeSwiper(startIndex = 0) {
    if (swiper) {
      swiper.slideTo(startIndex);
      return;
    }
    swiper = new Swiper('.fullscreen-swiper', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      zoom: {
        maxRatio: 3,
      },
      initialSlide: startIndex,
    });
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      fullscreenGallery.style.display = 'flex';
      initializeSwiper(index);
    });
  });

  closeBtn.addEventListener('click', () => {
    fullscreenGallery.style.display = 'none';
  });
});

