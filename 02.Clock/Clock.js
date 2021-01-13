const secHand = document.querySelector(".second-hand");
const minH = document.querySelector(".min-hand");
const hH = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const h = now.getHours();

  const minD = (min / 60) * 360 + 90;
  const secDeg = (sec / 60) * 360 + 90;
  const hD = (h / 12) * 360 + 90;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  hH.style.transform = `rotate(${hD}deg)`;
  minH.style.transform = `rotate(${minD}deg)`;
}
setInterval(() => {
  setDate();
}, 1000);

  
