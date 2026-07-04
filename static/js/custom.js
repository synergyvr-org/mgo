const bannerImages = [
  '/mgo/images/ss-dragonsreach.webp',
  '/mgo/images/ss-college-courtyard-ground.webp',
  '/mgo/images/ss-college-hall.webp',
  '/mgo/images/ss-falkreath-sunset.webp',
  '/mgo/images/ss-college-courtyard-ground.webp',
  '/mgo/images/ss-windhelm-west-bridge.webp',
  '/mgo/images/ss-windhelm-west.webp',
  '/mgo/images/ss-archmage-alchemy-wide.webp',
  '/mgo/images/ss-archmage-enchanter.webp',
  '/mgo/images/ss-archmage-potions.webp',
  '/mgo/images/ss-archmage-staff.webp',
  '/mgo/images/ss-archmage.webp',
  '/mgo/images/ss-barrow-akaviri.webp',
  '/mgo/images/ss-rorikstead.webp',
  '/mgo/images/ss-archaeology.webp'
];

const backgroundImages = [
  '/mgo/images/bg-amulet-of-mara.webp',
  '/mgo/images/bg-clavicus-vile.webp',
  '/mgo/images/bg-dragon-claw.webp',
  '/mgo/images/bg-miraak.webp',
  '/mgo/images/bg-molag-bal.webp',
  '/mgo/images/bg-krosis.webp',
  '/mgo/images/bg-daedric-helmet.webp',
  '/mgo/images/bg-dwarven-helmet.webp',
  '/mgo/images/bg-karstaags-skull.webp'
];
document.addEventListener('DOMContentLoaded', () => {
  // Randomize cover screenshots
  const cover = document.querySelector('.cover');
  if (cover) {
    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
    cover.style.backgroundImage = `url(${randomImage})`;
  }

  // Randomize <aside> background images
  const alertBoxes = document.querySelectorAll('.aside-alert .body');
  alertBoxes.forEach(function(alertBox) {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    alertBox.style.backgroundImage = `url(${randomImage})`;
  });

  // Video players
  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + String(s).padStart(2, '0');
  }

  document.querySelectorAll('.video-player').forEach(player => {
    const video = player.querySelector('video');
    const btnPlay = player.querySelector('.btn-play');
    const iconPlay = btnPlay.querySelector('.icon-play');
    const iconPause = btnPlay.querySelector('.icon-pause');
    const progressBar = player.querySelector('.progress-bar');
    const progressFilled = player.querySelector('.progress-filled');
    const progressBuffered = player.querySelector('.progress-buffered');
    const timeDisplay = player.querySelector('.time');
    const btnMute = player.querySelector('.btn-mute');
    const iconUnmuted = btnMute.querySelector('.icon-unmuted');
    const iconMuted = btnMute.querySelector('.icon-muted');
    const volumeSlider = player.querySelector('.volume-slider');
    const btnFullscreen = player.querySelector('.btn-fullscreen');

    function togglePlay() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }

    function updatePlayIcon() {
      const playing = !video.paused;
      iconPlay.style.display = playing ? 'none' : '';
      iconPause.style.display = playing ? '' : 'none';
    }

    btnPlay.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('pause', updatePlayIcon);

    video.addEventListener('timeupdate', () => {
      if (video.duration) {
        progressFilled.style.width = (video.currentTime / video.duration * 100) + '%';
        timeDisplay.textContent = formatTime(video.currentTime) + ' / ' + formatTime(video.duration);
      }
    });

    video.addEventListener('progress', () => {
      if (video.buffered.length && video.duration) {
        progressBuffered.style.width = (video.buffered.end(video.buffered.length - 1) / video.duration * 100) + '%';
      }
    });

    let dragging = false;

    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
    });

    progressBar.addEventListener('mousedown', () => { dragging = true; });
    document.addEventListener('mouseup', () => { dragging = false; });
    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const rect = progressBar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      video.currentTime = ratio * video.duration;
    });

    btnMute.addEventListener('click', () => {
      video.muted = !video.muted;
      iconUnmuted.style.display = video.muted ? 'none' : '';
      iconMuted.style.display = video.muted ? '' : 'none';
    });

    volumeSlider.addEventListener('input', () => {
      video.volume = volumeSlider.value;
      video.muted = video.volume === 0;
      iconUnmuted.style.display = video.muted ? 'none' : '';
      iconMuted.style.display = video.muted ? '' : 'none';
    });

    btnFullscreen.addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        player.requestFullscreen();
      }
    });
  });
});