const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.background = randomBg();
});

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)})`;
}
