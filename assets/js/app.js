console.log("figmaa to website");

const headerHeight = document.querySelector("header").offsetHeight;
document.querySelector(".home").style.paddingTop = `${headerHeight}px`;

console.log("header", headerHeight);
