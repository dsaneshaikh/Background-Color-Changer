function HexGenerator() {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(HexGenerator());

let intervalTime;
function startChangingColor() {
  if (!intervalTime) {
    intervalTime = setInterval(colorChange, 1000);
  }

  function colorChange() {
    document.body.style.backgroundColor = HexGenerator();
  }
}

function stopChangingColor() {
  clearInterval(intervalTime);
  intervalTime = null;
}
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
