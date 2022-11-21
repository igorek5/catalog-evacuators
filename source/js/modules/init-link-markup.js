const alphabetId = ['city-a', 'city-b', 'city-v', 'city-g', 'city-d', 'city-e', 'city-zh', 'city-z', 'city-i', 'city-k', 'city-l', 'city-m', 'city-n', 'city-o', 'city-p', 'city-r', 'city-s', 'city-t', 'city-u', 'city-f', 'city-h', 'city-c', 'city-ch', 'city-sh', 'city-eh', 'city-ju', 'city-ja'];
const alphabetArr = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'];

const linksArr = document.querySelectorAll('.cities__list a');
let counter = 0;


export const initLinkMarkup = () => {
  linksArr.forEach((link) => {
    if (link.textContent[0] === alphabetArr[counter]) {
      const b = document.createElement('b');
      link.id = alphabetId[counter];
      b.textContent = alphabetArr[counter];
      link.before(b);
      counter = counter + 1;
    }
  });
};

