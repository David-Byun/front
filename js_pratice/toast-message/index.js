const btn = document.getElementById("btn");
const container = document.getElementById("container");

const createNotification = () => {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = "This challenge is crazy!";

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
};

btn.addEventListener("click", createNotification);
