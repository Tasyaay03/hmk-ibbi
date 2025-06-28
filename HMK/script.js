document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log(navLinks.classList);
  });

  const video = document.getElementById('myVideo');
  const playButton = document.querySelector('.play-button');
  const icon = playButton.querySelector('i');

  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';
      icon.classList.replace('fa-play', 'fa-pause');
    } else {
      video.pause();
      playButton.style.display = 'flex';
      icon.classList.replace('fa-pause', 'fa-play');
    }
  });
});
