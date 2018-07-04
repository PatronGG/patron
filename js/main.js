
// Slider Object
let cards = [
  {
    photo: './images/profiles/dean.png',
    game: './images/league-logo.png',
    name: 'Dean Burrows',
    title: 'CEO, Head of Product',
    text: 'Built awesome products at ChallengeMe.GG and Hubrick',
    logos: [`<img src="./images/cme-logo.png">`, `<img src="./images/hubrick-logo.jpg">`],
    dots: `<div class="dot-solid"></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div>`
  },
  {
    photo: './images/profiles/jens.png',
    game: './images/csgo-logo.png',
    name: 'Jens Hilgers',
    title: 'Advisor',
    text: 'The \'Godfather of Esports\'. Built ESL, BITKRAFT & Dojo Madness',
    logos: [`<img src="./images/esl-logo.png">`, `<img src="./images/bitkraft-logo.png">`],
    dots: `<div class="dot"></div><div class="dot-solid"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div>`
  },
  {
    photo: './images/profiles/michael.png',
    game: './images/league-logo.png',
    name: 'Michael Arnold',
    title: 'Advisor',
    text: 'Founding team @ NeoReach (SF Based Startup). Also Wooga.',
    logos: [`<img src="./images/neoreach-logo.png"><img src="./images/wooga-Logo.png">`],
    dots: `<div class="dot"></div><div class="dot"></div></div><div class="dot-solid"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div>`
  },
  {
    photo: './images/profiles/dominic.png',
    game: './images/fifa-logo.png',
    name: 'Dominic Graefin',
    title: 'Lead Developer',
    text: '10+ years experience. Built games at Wooga for 50M monthly active users.',
    logos: [`<img src="./images/wooga-logo.png">`],
    dots: `<div class="dot"></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot-solid"></div></div><div class="dot"></div></div><div class="dot"></div>`
  },
  {
    photo: './images/profiles/gus.png',
    game: './images/dota-logo.png',
    name: 'Gustavo Brunoro',
    title: 'Senior Developer',
    text: '6+ years of experience building scalable mobile apps, worked at Wooga.',
    logos: [`<img src="./images/wooga-logo.png">`],
    dots: `<div class="dot"></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot-solid"></div></div><div class="dot"></div>`
  },
  {
    photo: './images/profiles/elliott.png',
    game: './images/league-logo.png',
    name: 'Elliott Rarden',
    title: 'Developer',
    text: '4+ years of experience in full-stack development.',
    logos: [`<img src="./images/echostar-logo.jpeg">`],
    dots: `<div class="dot"></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot"></div></div><div class="dot-solid"></div>`
  },
];


//Nav Buttons Scroll 
const btns = document.querySelectorAll('.btn');

function scrollTo() {
   const selector =  this.getAttribute('data-value'),
         target   =  document.querySelector(selector);
   
   target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
   burgerMenu.classList.remove('active');
}

btns.forEach(btn => btn.addEventListener('click', scrollTo))



// Burger Menu
const burgerBtn = document.querySelector('#burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', toggle);

function toggle() {
  burgerMenu.classList.toggle('active');
};



// NAVBAR BACKGROUND FADEIN
const header = document.querySelector('.header');
const navBar = document.querySelector('nav');

function fadeIn() {
  var scrolled = header.getBoundingClientRect().top;
  if(scrolled <= -30) {
    navBar.style.background = "#040A1F";
  } else if (scrolled > -30) {
    navBar.style.background = "none";
  }
}

window.addEventListener('scroll', fadeIn);


// SLIDER
const btnRight = document.getElementById('slider-left');
const btnLeft = document.getElementById('slider-right');
let x = 0;

let photo = document.getElementById('slider-photo');
let game = document.getElementById('slider-game');
let name = document.getElementById('slider-name');
let title = document.getElementById('slider-title');
let text = document.getElementById('slider-text');
let logos = document.getElementById('slider-logos');
let dots = document.querySelector('.dots');

function update() {
  photo.style.background = `url(${cards[x].photo}) center center no-repeat`;
  photo.style.backgroundSize = 'cover';
  game.src = cards[x].game;
  name.innerHTML = cards[x].name;
  title.innerHTML = cards[x].title;
  text.innerHTML = cards[x].text;
  logos.innerHTML = cards[x].logos.join(' ');
  dots.innerHTML = cards[x].dots;
}

btnRight.addEventListener('click', () => {
  if(x < cards.length - 1) {
    x++;
    update();
  } else {
    x = 0;
    update();
  }
});

btnLeft.addEventListener('click', () => {
  if(x == 0) {
    x = cards.length - 1;
    update();
  } else {
    x --;
    update();
  }
});


// MAP
function initMap() {
  var uluru = {lat: 52.510190, lng: 13.401335};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

update();
