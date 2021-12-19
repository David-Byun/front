const text = "이슬이 너무 사랑해!!!";

let index = 0;

const writeText = () => {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
};

setInterval(writeText, 100);
