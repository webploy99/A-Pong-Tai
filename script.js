// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/a-pong-tai/id6479685353";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a7/58/fb/a758fb6f-7d1a-4ed7-2bb3-c8b8df1c3cf3/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl ({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/14/75/c6/1475c6f9-e0cf-ebff-0128-6adbc3f1cde6/a244f3a2-58b2-49a7-a6de-78974b5c6f12_ipad.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/dc/66/62dc664b-b9f7-80f5-cbb4-a86b2d7c40a8/ba9b8a20-85ed-4d99-9294-90ab8112b1ad_ipad-1.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a2/32/f0/a232f044-4d18-497b-16be-23ad95a25f07/a5b34e30-cc44-4119-a55c-f35ce4e13ed6_ipad-2.png/434x0w.webp",
})

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}