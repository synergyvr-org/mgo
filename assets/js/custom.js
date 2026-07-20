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

// Filter + collapsible folders for the load order reference table (load-order/*)
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('modlist-filter');
  var table = document.getElementById('modlist-table');
  if (!input || !table) return;

  var tbody = table.tBodies[0];
  var rows = Array.prototype.slice.call(tbody.rows);
  var countEl = document.getElementById('modlist-count');
  var toggleAllBtn = document.getElementById('modlist-toggle-all');

  function isSep(r) { return r.classList.contains('modlist-separator'); }
  function isFolder(r) { return r.classList.contains('modlist-folder'); }
  function totalMods() { return rows.filter(function (r) { return !isSep(r); }).length; }

  var folders = rows.filter(isFolder);
  function allCollapsed() {
    return folders.length > 0 && folders.every(function (s) {
      return s.classList.contains('collapsed');
    });
  }
  function updateToggleLabel() {
    if (toggleAllBtn) toggleAllBtn.textContent = allCollapsed() ? 'Expand all' : 'Collapse all';
  }

  // A row is hidden by collapse when any enclosing folder (a preceding
  // separator of shallower depth) is collapsed. We track the enclosing chain
  // in a stack keyed by depth, so nested folders fold their children too.
  function applyVisibility() {
    var q = input.value.trim().toLowerCase();
    var filtering = q !== '';
    var stack = [];
    var shown = 0;
    rows.forEach(function (r) {
      var visible;
      if (filtering) {
        visible = r.textContent.toLowerCase().indexOf(q) !== -1;
      } else if (isFolder(r)) {
        var depth = parseInt(r.getAttribute('data-depth'), 10) || 0;
        while (stack.length && stack[stack.length - 1].depth >= depth) stack.pop();
        visible = !stack.some(function (s) { return s.collapsed; });
        stack.push({ depth: depth, collapsed: r.classList.contains('collapsed') });
      } else {
        // Leaves — mods and hash-less separators alike — are hidden when any
        // enclosing folder is collapsed, but they don't open or close a folder
        // context themselves. So a hash-less separator can be nested inside a
        // folder (like a mod), it just can't have children of its own.
        visible = !stack.some(function (s) { return s.collapsed; });
      }
      r.style.display = visible ? '' : 'none';
      if (visible && !isSep(r)) shown++;
    });
    if (countEl) countEl.textContent = filtering ? shown : totalMods();
  }

  // Reflect a folder's state in its icon: open when expanded, closed when collapsed.
  function setFolderState(sep, collapsed) {
    sep.classList.toggle('collapsed', collapsed);
    sep.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    var icon = sep.querySelector('.fa-folder, .fa-folder-open');
    if (icon) {
      icon.classList.toggle('fa-folder', collapsed);
      icon.classList.toggle('fa-folder-open', !collapsed);
    }
  }

  function toggle(sep) {
    setFolderState(sep, !sep.classList.contains('collapsed'));
    applyVisibility();
    updateToggleLabel();
  }

  function setAll(collapsed) {
    folders.forEach(function (s) { setFolderState(s, collapsed); });
    applyVisibility();
    updateToggleLabel();
  }

  // Make folders focusable, keyboard-operable collapse toggles.
  folders.forEach(function (r) {
    r.setAttribute('tabindex', '0');
    r.setAttribute('role', 'button');
    r.setAttribute('aria-expanded', 'true');
  });

  tbody.addEventListener('click', function (e) {
    var sep = e.target.closest('tr.modlist-folder');
    if (sep) toggle(sep);
  });
  tbody.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var sep = e.target.closest('tr.modlist-folder');
    if (sep) { e.preventDefault(); toggle(sep); }
  });

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', function () { setAll(!allCollapsed()); });
  }

  var clearBtn = document.getElementById('modlist-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      input.value = '';
      applyVisibility();
      input.focus();
    });
  }

  input.addEventListener('input', applyVisibility);
  applyVisibility();
  updateToggleLabel();

  // Autofocus the filter. Deferred past this DOMContentLoaded tick so it runs
  // after the theme's own documentFocus() (which focuses #R-body-inner on load).
  // preventScroll keeps the page from jumping to the input.
  setTimeout(function () { input.focus({ preventScroll: true }); }, 0);
});
