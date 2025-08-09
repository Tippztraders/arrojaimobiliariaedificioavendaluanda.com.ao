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


<script>
  fetch('https://api.countapi.xyz/hit/arroja-imobiliarias-2025/visits')
    .then(res => res.json())
    .then(res => {
      document.getElementById('visits').innerText = res.value;
    });
</script>
