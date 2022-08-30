let today = new Date();
let standardDate = new Date(2022, 01, 24);
let htmlContent;
let color;

oneDay = 24 * 60 * 60 * 1000; //milliseconds in one day
let diffDays = Math.floor(Math.abs(today - standardDate) / oneDay);

//find out if it as been odd weeks or even weeks since the standard Date
let weekInd = Math.floor(diffDays / 7) % 2 === 0 ? "even" : "odd";

color = weekInd === "even" ? "Green" : "Yellow";
let bodyBgCss = `background-image: url('${color}bgmobile.jpg')`;
if (color === "Yellow") {
  document.querySelector(".bin").style.cssText = "color: #641a9d; top: 30vh";
}

htmlContent =
  today.getDay() === 3
    ? `Today is Wednesday, the <span>${color}</span> bin will be collected.`
    : `on next Wednesday the <span>${color}</span> bin will be collected.`;
document.querySelector(".bin").innerHTML = htmlContent;

document.querySelector(".bin span").style.cssText = "color: " + color;
document.querySelector("body").style.cssText = bodyBgCss;
