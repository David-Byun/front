const setOpen = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

setOpen.addEventListener("click", () => {
  container.classList.add("active");
});

close.addEventListener("click", () => {
  container.classList.remove("active");
});
