const more = document.querySelector('#more');
more.addEventListener('c');
const button = document.querySelector('#bottom-button');
more.addEventListener('click', () => {
  console.log('이게맞나');
  button.classList.toggle('.none');
});
