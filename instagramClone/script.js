const heart = document.querySelector('#.fa-heart');
const mask = document.querySelector('#mask');
const bottomPopup = document.querySelector('#bottom-popup');
const main = document.querySelector('#main');
const moreBtn = document.querySelector('#moreBtn');
const popup = document.querySelector('#popup');
const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');

heart.onclick = function () {
  heart.style.color = 'red';
};
dot1.onclick = function () {
  if (popup.style.display == 'none') {
    popup.style.display = 'inline';
    mask.style.display = 'inline';
  } else {
    popup.style.display = 'none';
    mask.style.display = 'none';
  }
};
dot2.onclick = function () {
  if (popup.style.display == 'none') {
    popup.style.display = 'inline';
    mask.style.display = 'inline';
  } else {
    popup.style.display = 'none';
    mask.style.display = 'none';
  }
};
mask.onclick = function () {
  if (mask.style.display == 'none') {
    mask.style.display = 'inline';
  } else {
    mask.style.display = 'none';
    popup.style.display = 'none';
  }
};

moreBtn.onclick = function () {
  if (bottomPopup.style.display == 'none') {
    bottomPopup.style.display = 'inline';
  } else {
    bottomPopup.style.display = 'none';
  }
};
main.onclick = function () {
  if ((bottomPopup.style.display = 'inline')) {
    bottomPopup.style.display = 'none';
  }
};
