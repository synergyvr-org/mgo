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
window.onload = function() {
  const cover = document.querySelector('.cover');
  if (cover) {
    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
    cover.style.backgroundImage = `url(${randomImage})`;
  }

  const alertBoxes = document.querySelectorAll('.aside-alert .body');
  alertBoxes.forEach(function(alertBox) {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    alertBox.style.backgroundImage = `url(${randomImage})`;
  });
};