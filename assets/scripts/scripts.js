console.log("Cie mau nyari apa hayo");
console.log("Maap ga pake JS");
console.log("Anyway, here the prize for checking by: www.bit.do/YeetYeet ");

var localImagesFront = "assets/image/Public Transportation/Front/";
var imageSourcesFront = [
  localImagesFront + "CaheumCiroyom.png",
  localImagesFront + "CaheumLedeng.png",
  localImagesFront + "CaheumRoyom.png",
  //   localImages + "GedebageSimpang.png",
];

var localImagesBack = "assets/image/Public Transportation/Back/";
var imageSourcesBack = [
  localImagesBack + "CaheumCiroyom.png",
  localImagesBack + "CaheumLedeng.png",
  localImagesBack + "CaheumRoyom.png",
  localImagesBack + "GedebageSimpang.png",
];

var index = 0;
var index1 = 0;
setInterval(function () {
  if (index === imageSourcesBack.length) {
    index = 0;
  }
  document.getElementById("angkotBackward").src = imageSourcesBack[index];
  // document.getElementById("angkotFrontward").src = imageSourcesFront[index];
  index++;
}, 500);

setInterval(function () {
  if (index1 === imageSourcesFront.length) {
    index1 = 0;
  }
  // document.getElementById("angkotBackward").src = imageSourcesBack[index];
  document.getElementById("angkotFrontward").src = imageSourcesFront[index1];
  index1++;
}, 500);
