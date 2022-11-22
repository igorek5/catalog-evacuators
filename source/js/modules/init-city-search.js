const input = document.querySelector('.search-form__input input');
const linksArr = document.querySelectorAll('.cities__list a');
const asideList = document.querySelector('.aside__list');
const form = document.querySelector('.search-form form');

const blockAside = () => {
  if (input.value) {
    asideList.classList.add('disable');
  } else {
    asideList.classList.remove('disable');
  }
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

export const initCitySearch = () => {
  input.addEventListener('input', () => {
    blockAside();
    const inputTo = input.value.toUpperCase();
    const i = inputTo.length;
    linksArr.forEach((link) => {
      const linkTo = link.innerHTML.toUpperCase();
      const slis = linkTo.slice(0, i);
      if (slis === inputTo) {
        link.parentElement.style.display = 'flex';
      } else {
        link.parentElement.style.display = 'none';
      }
    });
  });
};

