console.log("Cie mau nyari apa hayo");
console.log("Maap ga pake JS");
console.log("Anyway, here the prize for checking by: www.bit.do/YeetYeet ");

var localImages = "assets/image/Public Transportation/";
var imageSources = [
  localImages + "CaheumCiroyom.png",
  localImages + "CaheumLedeng.png",
  localImages + "CaheumRoyom.png",
  //   localImages + "GedebageSimpang.png",
];

var index = 0;
setInterval(function () {
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("angkot").src = imageSources[index];
  index++;
}, 500);
