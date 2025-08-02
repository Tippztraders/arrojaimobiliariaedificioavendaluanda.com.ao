const thumb = document.querySelector('.video-thumbnail');
const fullscreen = document.querySelector('.fullscreen-video');
const close = document.querySelector('.close-video');

thumb.addEventListener('click', () => {
  fullscreen.style.display = 'flex';
  const video = fullscreen.querySelector('video');
  video.currentTime = 0;
  video.play();
});

close.addEventListener('click', () => {
  fullscreen.style.display = 'none';
  const video = fullscreen.querySelector('video');
  video.pause();
});
