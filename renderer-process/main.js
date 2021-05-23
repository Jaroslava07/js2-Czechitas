import { Carousel } from './components/carousel/carousel.js';
import { NewsArticle } from './components/news-article/news-article.js';
import { Day } from './components/day/day.js';


/*const header = document.querySelector('header.header-news > div.header-news__container');


const carouselItemCount = 2;
let carouselItemStart = 0;
let articles;
*/
const carousel = document.querySelector('app-carousel');
fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const data = JSON.parse(responseText);
        carousel.populateNewsCarousel(data.articles);
    });



const mainContent = document.querySelector('section.main-content');
for (let i = 0; i < 31; i++) {
    mainContent.appendChild(new Day(i));
}

/*
function populateNewsCarousel(news, startAt) {
header.innerText = '';
for(let i = startAt; i < (startAt + carouselItemCount); i ++) {
    const newsValue = news[i];
    const newsArticle = new NewsArticle();
    const newsDiv = newsArticle.createDivForNews(newsValue);
    header.appendChild(newsDiv);
}
checkButtonsVisibility();
}

function checkButtonsVisibility() {
buttonLeft.hidden = carouselItemStart === 0;
buttonRight.hidden = carouselItemStart >= (articles.length - carouselItemCount);
}





const buttonLeft = document.querySelector('#carousel-button-left');

const buttonRight = document.querySelector('#carousel-button-right');

buttonLeft.addEventListener('click', () => {
carouselItemStart --;
populateNewsCarousel(articles, carouselItemStart);
});
buttonRight.addEventListener('click', () => {
carouselItemStart ++;
populateNewsCarousel(articles, carouselItemStart);
});

*/

/*
const container = document.querySelector('section.main-content');

for (let i = 1; i <= 31; i ++) {
    const day = document.createElement('div');
    day.classList.add('main-content__day');
    const dayContents = document.createElement('div');
    day.innerText = '' + i;
    // day.appendChild(dayContents);
    container.appendChild(day);
}

*/



/*            DÚ Č.1   MOJE  VARIANTA   */
/*const elementKteryPotrebuji = document.querySelector('section.main-content');
const dnyMesice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


    for (let i = 0; i < dnyMesice.length; i ++) {
        const divDen = document.createElement('div');
        divDen.classList.add('main-content__day');
        const dnyMesiceValue = dnyMesice[i];
        divDen.innerText = dnyMesiceValue;
        elementKteryPotrebuji.appendChild(divDen);
      }*/



